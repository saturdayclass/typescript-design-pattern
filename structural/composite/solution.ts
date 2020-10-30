// Dengan composite design patern ini kita bisa membuat sebuah tree kemudian juga kita bisa nentuin mana cabangnya atau ujungnya yg mana
namespace CompositeSolution {
  abstract class Category {
    name: string;
    parent: Category | null = null;
    children: Category[] = [];

    constructor(name: string) {
      this.name = name;
    }

    setParent(parent: Category | null) {
      this.parent = parent;
    }

    getParent(): Category | null {
      return this.parent;
    }

    isComposite(): boolean {
      return false;
    }

    abstract getName(): string;
  }

  class Produk extends Category {
    getName(): string {
      return this.name;
    }
  }

  class CategoryComposite extends Category {
    constructor(name: string) {
      super(name);
    }

    add(category: Category): void {
      this.children.push(category);
      category.setParent(category);
    }

    remove(category: Category): void {
      const categoryIndex = this.children.indexOf(category);
      this.children.splice(categoryIndex, 1);

      category.setParent(null);
    }

    isComposite(): boolean {
      return true;
    }

    getName(): string {
      return this.name;
    }
  }

  const topCategory = new CategoryComposite('Category');

  const computer = new CategoryComposite('Computer');
  const fashion = new CategoryComposite('Fashion');

  const pc = new CategoryComposite('PC');
  const laptop = new CategoryComposite('Laptop');
  const casing = new CategoryComposite('Case');
  const motherboard = new CategoryComposite('Motherboard');

  topCategory.add(computer);
  topCategory.add(fashion);

  computer.add(pc);
  computer.add(laptop);

  pc.add(casing);
  pc.add(motherboard);

  console.log(topCategory);

  const print = (composite: Category): void => {
    console.log(`Category ${composite.getName()} `);

    composite.children.forEach((item) => {
      if (item.isComposite() && item.children.length) {
        print(item);
      } else {
        console.log(`Product  ${item.getName()}`);
      }
    });
  };

  print(topCategory);
}
