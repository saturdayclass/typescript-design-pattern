//  Bride, digunakan untuk mengelompokan beberapa set class yang memiliki karakteristik yang sama. Kemudian menghubungkanya melalui interface utama
namespace BridePattern {
  interface Price {
    name: string;
    sellPrice(): string;
  }

  class Cheap implements Price {
    name: string = 'Murah';

    sellPrice(): string {
      return `Jual harga ${this.name}`;
    }
  }

  class Expensive implements Price {
    name: string = 'Mahal';

    sellPrice(): string {
      return `Jual harga ${this.name}`;
    }
  }

  interface IProduct {
    name: string;
  }

  abstract class Product implements IProduct {
    name: string;
    price: Price;

    constructor(name: string, price: Price) {
      this.name = name;
      this.price = price;
    }

    abstract sell(): void;
  }

  class Fashion extends Product {
    sell(): void {
      console.log(`Jual ${this.name} dengan harga ${this.price.sellPrice()}`);
    }
  }

  class Computer extends Product {
    sell(): void {
      console.log(`Jual ${this.name} dengan harga ${this.price.sellPrice()}`);
    }
  }

  const fashionMurah = new Fashion('Celana Pendek', new Cheap());
  console.log(fashionMurah.sell());
  const computerMahal = new Computer('Asus Rog', new Expensive());
  console.log(computerMahal.sell());
}
