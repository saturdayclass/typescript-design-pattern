namespace DecoratorSolution {
  interface IProduct {
    getProduct(): any;
  }

  class Product implements IProduct {
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

  abstract class ProductDecorator implements IProduct {
    protected product: Product;

    constructor(product: Product) {
      this.product = product;
    }

    abstract getProduct(): any;
  }

  class ProductImportDecorator extends ProductDecorator {
    getProduct() {
      return {
        name: this.product.name,
        price: this.product.price + 1000,
        tax: 1000,
      };
    }
  }

  class ProductExportDecorator extends ProductDecorator {
    getProduct() {
      return {
        name: this.product.name,
        price: this.product.price + 2000,
        text: 2000,
      };
    }
  }

  const ProductA = new Product('Product A', 10000);
  console.log(ProductA.getProduct());

  const productAFromImport = new ProductImportDecorator(ProductA);
  console.log(productAFromImport.getProduct());

  const productAFromExport = new ProductExportDecorator(ProductA);
  console.log(productAFromExport.getProduct());
}
