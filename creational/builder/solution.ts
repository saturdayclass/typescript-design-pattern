namespace BuilderSolution {
  // Cara 1
  class User {
    public name: string = '';
    public email: string = '';
    public password: string = '';

    getDetails() {
      return `Hello, ${this.name}`;
    }
  }

  class UserBuilder {
    private user: User;

    constructor() {
      this.user = new User();
    }

    setName(value: string) {
      this.user.name = value;
      return this;
    }

    setEmail(value: string) {
      this.user.email = value;
      return this;
    }

    setPassword(value: string) {
      this.user.password = value;
      return this;
    }

    build() {
      return this.user;
    }
  }

  const user1 = new UserBuilder().setName('Raihan').build();
  console.log(user1.name);

  // cara 2

  class User2 {
    public name: string = '';
    public email: string = '';
    public password: string = '';

    constructor({ name = '', email = '', password = '' } = {}) {
      this.name = name;
      this.email = email;
      this.password = password;
    }

    getDetails() {
      return `Hello, ${this.name}`;
    }
  }

  const user2 = new User2({ name: 'Raihan' });
  console.log(user2.getDetails());
}
