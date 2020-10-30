namespace FecadeSolution {
  const operation = (num1: number, num2: number): number => {
    const opartion1 = num1 + num2;
    const opartion2 = num1 - opartion1;
    const opartion3 = opartion2 * 25;

    return opartion3;
  };

  const calculate = (): number => {
    let num1: number = 10;
    let num2: number = 5;

    return operation(num1, num2);
  };

  console.log(calculate());
}
