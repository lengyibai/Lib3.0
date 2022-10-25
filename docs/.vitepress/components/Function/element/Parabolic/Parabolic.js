export default class {
  move;
  middle;
  right;
  runing;
  speed;
  initX;
  initY;
  constructor(move, middle, right, speed = 20) {
    this.move = move;
    this.middle = middle;
    this.right = right;
    this.speed = speed;
  }

  getSolve(arr1, arr2, arr3) {
    let d = arr1[0];
    let e = arr1[1];
    let f = arr2[0];
    let g = arr2[1];
    let h = arr3[0];
    let i = arr3[1];

    let a = (((g - i) * (f - d)) / (f - h) - (g - e)) / (((f * f - h * h) * (f - d)) / (f - h) - (f * f - d * d));
    let b =
      (((g - i) * (f * f - d * d)) / (f * f - h * h) - (g - e)) /
      (((f - h) * (f * f - d * d)) / (f * f - h * h) - (f - d));
    let c =
      (((g * h - f * i) * (d * d * f - f * f * d)) / (f * f * h - h * h * f) - (f * e - d * g)) /
      (((h - f) * (d * d * f - f * f * d)) / (f * f * h - h * h * f) - (f - d));
    let all = [a, b, c];

    return all;
  }

  run(e) {
    return new Promise((resolve, reject) => {
      if (this.runing) {
        reject();
        return;
      }
      this.runing = true;
      const x = e.target.getBoundingClientRect().x;
      const y = e.target.getBoundingClientRect().y;
      this.move.style.display = `block`;
      this.move.style.left = x + "px";
      this.move.style.top = y + "px";
      const move = this.move;
      const middle = this.middle;
      const right = this.right;

      var arr1 = [move.offsetLeft, -move.offsetTop];
      var arr2 = [middle.offsetLeft, -middle.offsetTop];
      var arr3 = [right.offsetLeft, -right.offsetTop];

      const EYC = this.getSolve(arr1, arr2, arr3);
      (function fn() {
        let newLeft = move.offsetLeft + this.speed;
        let newTop = EYC[0] * newLeft * newLeft + EYC[1] * newLeft + EYC[2];
        move.style.left = newLeft + "px";
        move.style.top = -newTop + "px";
        if (newLeft >= arr3[0]) {
          resolve();
          this.move.style.transition = `all 0.25s`;
          this.move.style.opacity = 0;
          setTimeout(() => {
            this.move.style.transition = `all 0s`;
            this.move.style.opacity = 1;
            this.move.style.display = `none`;
            this.runing = false;
          }, 250);
          return;
        }
        requestAnimationFrame(fn.bind(this));
      }.call(this));
    });
  }
}
