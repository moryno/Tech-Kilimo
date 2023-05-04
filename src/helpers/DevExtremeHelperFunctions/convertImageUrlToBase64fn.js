export function convertImageUrlToBase64(imageUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "Anonymous";
    image.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);
      const dataURL = canvas.toDataURL("image/png");
      const base64 = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
      resolve(base64);
    };
    image.onerror = function () {
      reject(new Error("Failed to load image"));
    };
    image.src = imageUrl;
  });
}

// export function imageToBase64(filename) {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.crossOrigin = "Anonymous";
//     img.onload = () => {
//       const canvas = document.createElement("canvas");
//       canvas.width = img.width;
//       canvas.height = img.height;
//       const ctx = canvas.getContext("2d");
//       ctx.drawImage(img, 0, 0);
//       const dataURL = canvas.toDataURL(`image/${filename.split(".").pop()}`);
//       const base64 = dataURL.split(",")[1];
//       resolve(base64);
//     };
//     img.onerror = () => reject(new Error("Failed to load image"));
//     img.src = require(`../../assets/ ${filename}`).default;
//   });
// }

// // add image to workbook by filename
// const imageId1 = workbook.addImage({
//   filename: 'path/to/image.jpg',
//   extension: 'jpeg',
// });

// // add image to workbook by buffer
// const imageId2 = workbook.addImage({
//   buffer: fs.readFileSync('path/to.image.png'),
//   extension: 'png',
// });

// // add image to workbook by base64
// const myBase64Image = "data:image/png;base64,iVBORw0KG...";
// const imageId2 = workbook.addImage({
//   base64: myBase64Image,
//   extension: 'png',
// });
