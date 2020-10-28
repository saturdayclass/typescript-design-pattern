namespace prototypePattern {
  class User {
    public name: string;
    public email: string;

    constructor(name: string, email: string) {
      this.name = name;
      this.email = email;
    }

    public clone(): this {
      const clone = Object.assign({}, this);
      return clone;
    }
  }

  const user1 = new User('raihan', 'raihan@gmail.com');
  const user2 = user1.clone();
  const user3 = user1.clone();
  user3.name = 'Eko';
  console.log(user2);
}
