const randomInt = (min: number, max: number): number =>
  Math.round(Math.random() * (max - min) + min);

export default randomInt;
