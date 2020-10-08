export default class Preloader {
  static preloadImages({ images, completed }) {
    const promises = images.map((imagePath) =>
      this.preloadImage({ imagePath })
    );
    Promise.all(promises).then(completed);
  }

  static preloadImage({ imagePath }) {
    return new Promise((res, rej) => {
      let image = new Image();
      image.src = imagePath;
      image.onload = res;
    });
  }
}
