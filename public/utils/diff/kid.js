//random selection of indexes if available
const kid = (board) => {
  const index = Math.floor(Math.random() * 9);
  if (board[index] === "") {
    return index;
  } else {

    //recursive call
    return kid(board);
  }
};

export default kid;
