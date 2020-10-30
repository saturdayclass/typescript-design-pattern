// Decorator design pattern berfungsi untuk menambahkan beberapa fitur atau function pada sebuah object yang sudah ada. analoginya ketika kita sudah mempunyai rumah, tapi kita ingin menambkan hiasan pada rumah tsb. Kita bisa menambahkannya dengan decorator.

class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getProduct() {
    return {
      name: this.name,
      price: this.price,
    };
  }
}

const productA = new Product('product A', 50);
console.log(productA.getProduct());

const productAFromImport = Object.assign(productA.getProduct(), { tax: 10 });
productAFromImport.price += 1000;
console.log(productAFromImport);

const productAFromExport = Object.assign(productA.getProduct(), { tax: 20 });
productAFromExport.price += 2000;
console.log(productAFromExport);
