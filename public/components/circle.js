const circleHoverElement = (id) => {
  const circleHoverClass =
    "animate-pulse absolute w-16 h-16 sm:w-24 sm:h-24 border-4 rounded-full border-gray-900";
  const circleHover = $(
    `<div id=${id + "-circle-hover"} class="${circleHoverClass}"></div>`
  );

  return circleHover;
};

const circleElement = (id) => {
  const circleClass =
    "absolute w-16 h-16 sm:w-24 sm:h-24 border-4 sm:border-8 rounded-full border-gray-900";
  const circle = $(`<div id=${id + "-circle"} class="${circleClass}"></div>`);

  return circle;
};

const circleWon = () => {
  const circleClass =
    "w-14 h-14 sm:w-20 sm:h-20 border-4 rounded-full border-yellow-300";
  const circle = $(`<div class="${circleClass}"></div>`);

  return circle;
};

export {
  circleHoverElement as circleHover,
  circleElement as circle,
  circleWon,
};
