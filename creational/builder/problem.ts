/* Problem
Ketika kita membuat sebuah class kemudian kita menginstasiasi class tsb di banyak tempat, terus kemudian class yang kita buat ini memiliki perubahan data property. Tentunya kita harus merubah satu persatu instasiasi class di banyak tempat tsb
*/
class User {
  private name: string;
  private email: string;
  private password: string;
  // private age: number;

  constructor(name: string, email: string, password: string /*age: number*/) {
    this.name = name;
    this.email = email;
    this.password = password;
    // this.age = age;
  }
}

const user = new User('raihan', 'raihan@gmail.com', '12121');
const user1 = new User('raihan', 'raihan@gmail.com', '12121');
const user2 = new User('raihan', 'raihan@gmail.com', '12121');
const user3 = new User('raihan', 'raihan@gmail.com', '12121');
const user4 = new User('raihan', 'raihan@gmail.com', '12121');
const user5 = new User('raihan', 'raihan@gmail.com', '12121');
const user6 = new User('raihan', 'raihan@gmail.com', '12121');
