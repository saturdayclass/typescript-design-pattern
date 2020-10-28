namespace SingletonSolution {
  class Me {
    private firstName: string = '';
    private lastName: string = '';
    private static instance: Me;

    public static getInstance(): Me {
      if (!Me.instance) {
        Me.instance = new Me();
      }
      return Me.instance;
    }

    getFullName(): string {
      this.firstName = 'Raihan';
      this.lastName = 'Muhammad';

      return `${this.firstName} ${this.lastName}`;
    }
  }

  const profile1 = Me.getInstance();
  console.log(profile1.getFullName());

  const profile2 = Me.getInstance();
  console.log(profile2.getFullName());

  console.log(profile1 === profile2);
}
