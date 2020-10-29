class Category {
  name: string;
  children: any[] = [];

  constructor(name: string) {
    this.name = name;
  }
}

const computer = new Category('Computer');

computer.children = [
  (new Category('PC').children = [
    new Category('Case'),
    new Category('Motherboard'),
  ]),
  (new Category('Laptop').children = [new Category('Asus Rog')]),
];

console.log(computer);
