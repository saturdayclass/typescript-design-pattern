namespace FactorySolution {
  interface Logistic {
    qty: number;
    deliver(): void;
  }

  class Truck implements Logistic {
    public qty: number;

    constructor(qty: number) {
      this.qty = qty;
    }

    deliver(): void {
      console.log(`Kirim ${this.qty} barang menggunakan truk`);
    }
  }

  class Ship implements Logistic {
    public qty: number;

    constructor(qty: number) {
      this.qty = qty;
    }

    deliver(): void {
      console.log(`Kirim ${this.qty} barang menggunakan kapal`);
    }
  }

  type LogisticType = {
    qty: number;
    type: string;
  };

  interface Factory {
    create(options: LogisticType): Logistic;
  }

  class LogisticFactory implements Factory {
    create(options: LogisticType): Logistic {
      if (options.type === 'land') {
        return new Truck(options.qty);
      } else if (options.type === 'sea') {
        return new Ship(options.qty);
      }

      throw new Error('Class not found');
    }
  }

  const logistic = new LogisticFactory();
  const byLand = logistic.create({ type: 'land', qty: 100 });
  const bySea = logistic.create({ type: 'sea', qty: 200 });

  console.log(byLand.deliver());
  console.log(bySea.deliver());
}
