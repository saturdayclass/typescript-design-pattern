// fecade pattern berfungsi untuk membungkus sebuah logic yang kompleks kepada sebuah class tersendiri atau function tersendiri. Jadi dia bisa di reusable

const calculate = (): number => {
  let num1: number = 10;
  let num2: number = 5;

  const opartion1 = num1 + num2;
  const opartion2 = num1 - opartion1;
  const opartion3 = opartion2 * 25;

  return opartion3;
};

const calculate2 = (): number => {
  let num1: number = 20;
  let num2: number = 10;

  const opartion1 = num1 + num2;
  const opartion2 = num1 - opartion1;
  const opartion3 = opartion2 * 25;

  return opartion3;
};
