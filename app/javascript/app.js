import imgUrl from "./images/banner.jpeg"
import Cropper from "cropperjs/dist/cropper.common"
import 'cropperjs/dist/cropper.css'

function run() {
  const image = document.createElement('img')
  image.src = imgUrl
  image.alt = "An image to crop"
  image.id = "image"
  document.body.appendChild(image)

  new Cropper(image, {
    aspectRatio: 16 / 9,
    crop(event) {
      console.log(event.detail.x);
      console.log(event.detail.y);
      console.log(event.detail.width);
      console.log(event.detail.height);
      console.log(event.detail.rotate);
      console.log(event.detail.scaleX);
      console.log(event.detail.scaleY);
    },
  });
}

document.addEventListener('DOMContentLoaded', run)
