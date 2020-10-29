/* Cara 1
ambil satu acuan class product, kemudian setup material biar sama seperi produk.
Jadi dia harus beradaptasi
*/

namespace AdapterPattern {
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

  class MaterialAdapters implements BaseData {
    private adaptee: Material;

    constructor(adaptee: Material) {
      this.adaptee = adaptee;
    }

    getData() {
      return {
        name: this.adaptee.name,
        brand: '',
      };
    }
  }

  let list: any[] = [];
  const product = new Product('Motor', 'Supra');
  list.push(product.getData());

  const material1 = new MaterialAdapters(new Material('Besi', 19));
  const material2 = new MaterialAdapters(new Material('Roda', 2));
  list.push(material1.getData());
  list.push(material2.getData());

  console.log(list);

  // Cara ke 2
  // Gimana kalo gada acuan? kita harus mengadaptasikan class satu per satu

  enum AdapterType {
    PRODUCT,
    MATERIAL,
  }

  class DataAdapter implements BaseData {
    public name: string;
    public brand: string;
    public qty: number;
    public type: AdapterType;

    constructor({ name = '', brand = '', qty = 0 } = {}, type: AdapterType) {
      this.name = name;
      this.brand = brand;
      this.qty = qty;
      this.type = type;
    }

    getData() {
      if (this.type === AdapterType.PRODUCT) {
        const product = new Product(this.name, this.brand);
        return {
          name: product.name,
          brand: product.brand,
        };
      } else if (this.type === AdapterType.MATERIAL) {
        const material = new Material(this.name, this.qty);
        return {
          name: material.name,
          brand: '',
        };
      }

      return {
        name: '',
        brand: '',
      };
    }
  }

  let list2: any[] = [];

  const data1 = new DataAdapter(
    { name: 'Motor', brand: 'Supra X' },
    AdapterType.PRODUCT
  );
  const data4 = new DataAdapter(
    { name: 'Motor', brand: 'Supra X 125' },
    AdapterType.PRODUCT
  );
  list2.push(data4.getData());
  list2.push(data1.getData());

  const data2 = new DataAdapter(
    { name: 'Besi', qty: 19 },
    AdapterType.MATERIAL
  );
  const data3 = new DataAdapter(
    { name: 'Besi', qty: 19 },
    AdapterType.MATERIAL
  );

  list2.push(data2.getData());
  list2.push(data3.getData());

  console.log(list2);
}
