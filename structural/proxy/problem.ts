// Proxy ini adalah pattern yang berfungsi sebagai penengah antara consumen dan class yang ingin di produksi
// Mungkin saja class yang kita butuhkan tidak bisa langsung ambil data tsb. Nah maka dari itu kita bisa gunakan proxy pattern sebagai penengan untuk mengambil data sementara.

interface ICovid {
  getData(): Promise<{
    confirmed: number;
    recovered: number;
    deaths: number;
  }>;
}

class Covid implements ICovid {
  country: string;

  constructor(country: string) {
    this.country = country;
  }

  async getData() {
    const response: any = await fetch(
      `https://covid19.mathdro.id/api/countries/${this.country}`
    );
    const data: any = await response.json();

    return {
      confirmed: data.confirmed.value,
      recovered: data.recovered.value,
      deaths: data.deaths.value,
    };
  }
}

const covid = new Covid('Indonesia');

console.log(await covid.getData());
// Kita harus nunggu agak lama untuk mendapatkan data. Jadi kita bisa simpan data yang sudah pernah kita akses tsb. Kemudian data sementara tsb akan di hendle oleh si proxy
