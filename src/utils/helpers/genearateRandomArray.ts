const genearateRandomArray = (length: number) => {
  const array = [];

  for (let i=0; i < length; i++) array.push(Math.random());

  return array;
}
  

export default genearateRandomArray;
