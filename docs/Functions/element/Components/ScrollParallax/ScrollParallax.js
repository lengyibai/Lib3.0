export default (v, el, phase) => {
  phase.forEach((i, index) => {
    if (v <= i[1] && v >= i[0]) {
      let p = 0;
      if (v >= i[0]) {
        p = (v - i[0]) / (i[1] - i[0]);
        Object.keys(i[2](p, v)).forEach((_i) => {
          el.style[_i] = i[2](p)[_i];
        });
      }
    } else if (v > i[1]) {
      Object.keys(i[2](1)).forEach((_i) => {
        el.style[_i] = i[2](1)[_i];
      });
    } else if (i[0] > v && index === 0) {
      Object.keys(i[2](0)).forEach((_i) => {
        el.style[_i] = i[2](0)[_i];
      });
    }
  });
};
