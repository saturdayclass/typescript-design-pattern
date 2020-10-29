/*

  Name | Brand 
  -------------
  Motor | Supra
  Besi | -

*/

interface BaseData {
  getData(): {
    name: string;
    brand: string;
  };
}

interface IProduct extends BaseData {
  name: string;
  brand: string;
}

interface IMaterial {
  name: string;
  qty: number;
}

class Product implements IProduct {
  name: string;
  brand: string;

  constructor(name: string, brand: string) {
    this.name = name;
    this.brand = brand;
  }

  getData() {
    return {
      name: this.name,
      brand: this.brand,
    };
  }
}

class Material implements IMaterial {
  name: string;
  qty: number;

  constructor(name: string, qty: number) {
    this.name = name;
    this.qty = qty;
  }

  getData() {
    return {
      name: this.name,
      qty: this.qty,
    };
  }
}

let list: any[] = [];
const product = new Product('Motor', 'Supra');
list.push(product.getData());

const material1 = new Material('Besi', 90);
const material2 = new Material('Roda', 2);
list.push(material1.getData());
list.push(material2.getData());

console.log(list);
