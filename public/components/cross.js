const crossClass = "flex items-center justify-center";

//hover cross
const crossHoverElement = (id) => {
  const crossHover = $(
    `<div id=${id + "-cross-hover"} class="${crossClass}"></div>`
  );

  const crossLStickHoverClass =
    "animate-pulse absolute w-16 h-0.5 sm:w-28 sm:h-1 rotate-45 rounded-full bg-gray-900";
  const crossRStickHoverClass =
    "animate-pulse absolute  w-16 h-0.5 sm:w-28 sm:h-1 -rotate-45 rounded-full bg-gray-900";

  const crossLStickHover = $(`<div class="${crossLStickHoverClass}"></div>`);
  const crossRStickHover = $(`<div class="${crossRStickHoverClass}"></div>`);

  crossHover.append(crossLStickHover);
  crossHover.append(crossRStickHover);

  return crossHover;
};

//normal cross
const crossElement = (id) => {
  const cross = $(`<div id=${id + "-cross"} class="${crossClass}"></div>`);

  const crossLStickClass =
    "absolute w-16 h-1 sm:w-28 sm:h-2 rotate-45 rounded-full bg-gray-900";
  const crossRStickClass =
    "absolute w-16 h-1 sm:w-28 sm:h-2 -rotate-45 rounded-full bg-gray-900";

  const crossLStick = $(`<div class="${crossLStickClass}"></div>`);
  const crossRStick = $(`<div class="${crossRStickClass}"></div>`);

  cross.append(crossLStick);
  cross.append(crossRStick);

  return cross;
};

//winner cross
const crossWon = () => {
  const cross = $(`<div class="${crossClass}"></div>`);

  //transition-transform duration-700 w-20 h-20 border-4 rounded-full border-yellow-300 mt-20
  const crossLStickClass =
    "absolute w-20 sm:w-24 h-1 rotate-45 rounded-full bg-yellow-300";
  const crossRStickClass =
    "absolute w-20 sm:w-24 h-1 -rotate-45 rounded-full bg-yellow-300";

  const crossLStick = $(`<div class="${crossLStickClass}"></div>`);
  const crossRStick = $(`<div class="${crossRStickClass}"></div>`);

  cross.append(crossLStick);
  cross.append(crossRStick);

  return cross;
};

export { crossHoverElement as crossHover, crossElement as cross, crossWon };
