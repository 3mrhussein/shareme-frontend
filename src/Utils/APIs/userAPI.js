import { client } from './client';
export function createNewUserDoc(userDocument, callback) {
  client.createIfNotExists(userDocument).then(() => callback());
}

export function getUserById(userID) {
  const query = `*[_type=="user" && _id =='${userID}']`;
  return client.fetch(query);
}

export const fetchUserFromLocalStorage = () => {
  const userInfo =
    localStorage.getItem('user') !== undefined
      ? JSON.parse(localStorage.getItem('user'))
      : localStorage.clear();
  return userInfo;
};
