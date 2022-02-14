export const today = () => {
  const milisecToDay = 1000 * 60 * 60 * 24;
  return Math.floor(Date.now() / milisecToDay);
};
