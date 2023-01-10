import { client } from './client';
import { v4 as uuidv4 } from 'uuid';

export function searchPins(searchTerm) {
  //query to filter pins using the searchTerm
  const query = `*[_type == "pin" && title match '${searchTerm}*' || about match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
    image {
      asset -> {
        url
      }
    },
    _id,
    destination,
    postedBy -> {
      _id,
      userName,
      image
    },
    save[] {
      _key,
      postedBy -> {
        _id,
        userName,
        image
      },
    },
  }`;
  return client.fetch(query);
}
export const fetchSaveList = async (pinID) => {
  //query to filter pins using the searchTerm
  const query = `*[_type == "pin" && _id == "${pinID}"]{
    save[] {
      _key,
    userId,
    },
  }`;
  return client.fetch(query);
};

export function getAllPins() {
  const query = `*[_type == 'pin'] | order(_createdAt desc) {
    image {
      asset -> {
        url
      }
    },
    category,
    _id,
    destination,
    postedBy -> {
      _id,
      userName,
      image
    },
    save[] {
      userId,
      postedBy -> {
        _id,
        userName,
        image
      },
    },
  }`;
  return client.fetch(query);
}

//fetch all data from pin collections that have _id == pinId
export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};
export const postPinComment = (pinId, comment, user) => {
  return client
    .patch(pinId)
    .setIfMissing({ comments: [] })
    .insert('after', 'comments[-1]', [
      {
        comment,
        _key: uuidv4(),
        postedBy: { _type: 'postedBy', _ref: user?._id },
      },
    ])
    .commit();
};
//fetch all Pins that have the same category as this pin
export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};
export function getSavedPins(userId) {
  return client.fetch(userSavedPinsQuery(userId));
}

export function getUserCreatedPins(userId) {
  return client.fetch(userCreatedPinsQuery(userId));
}

export function savePinByCurrentUser(id, userId) {
  return client
    .patch(id)
    .setIfMissing({ save: [] })
    .insert('after', 'save[-1]', [
      {
        _key: uuidv4(),
        userId: userId,
        postedBy: {
          _type: 'postedBy',
          _ref: userId,
        },
      },
    ])
    .commit();
}

export const deleteUserFromSaveList = (pinId, key) => {
  client
    .patch(pinId)
    .unset([`save[_key=="${key}"]`])
    .commit();
};

export function deletePinById(id) {
  return client.delete(id);
}

export function postPin(doc) {
  return client.create(doc);
}

export function fetchPinDetails(id) {
  const query = pinDetailQuery(id);
  return client.fetch(query);
}

export function fetchPinsWithSameCategory(pin) {
  const query = pinDetailMorePinQuery(pin);
  return client.fetch(query);
}

export function uploadPinImage(imageFile) {
  return client.assets.upload('image', imageFile, {
    contentType: imageFile.type,
    filename: imageFile.name,
  });
}
