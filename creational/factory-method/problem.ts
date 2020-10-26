//  Factory method adalah sebuah method untuk membuat bedasarkan class yang berbeda-beda

class Truck {
  private qty: number;

  constructor(qty: number) {
    this.qty = qty;
  }

  deliver(): void {
    console.log(`Kirim ${this.qty} barang menggunakan truk`);
  }
}

class Ship {
  private qty: number;

  constructor(qty: number) {
    this.qty = qty;
  }

  deliver(): void {
    console.log(`Kirim ${this.qty} barang menggunakan kapal`);
  }
}

let type = 'land';
if (type === 'land') {
  new Truck(100);
} else if (type === 'sea') {
  new Ship(10);
}
