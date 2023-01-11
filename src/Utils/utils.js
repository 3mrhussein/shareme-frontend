export const resizeImage = (file) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    //create blob with file data and get its URL from file
    const blobURL = window.URL.createObjectURL(file);
    img.src = blobURL;
    img.onerror = function () {
      URL.revokeObjectURL(blobURL);
      console.log('cannot load image');
    };
    img.onload = function () {
      //release memory
      window.URL.revokeObjectURL(blobURL);

      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      canvas.toBlob(
        (blob) => {
          resolve(blob);
        },
        'image/jpeg',
        1
      );
    };
    img.onerror = reject;
  });
};
