// Singleton ini digunakan untuk membatasi agar object tidak di instasiasi berulang kali
class Me {
  private firstName: string = '';
  private lastName: string = '';

  getFullName(): string {
    this.firstName = 'Raihan';
    this.lastName = 'Muhammad';

    return `${this.firstName} ${this.lastName}`;
  }
}

const profile1 = new Me();
console.log(profile1.getFullName());

const profile2 = new Me();
console.log(profile2.getFullName());

console.log(profile1 === profile2);
// Result is: false;
