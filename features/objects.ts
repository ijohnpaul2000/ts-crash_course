const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

interface Profile {
  name: string;
  age: number;
  coords: {
    lat: number;
    lng: number;
  };
  setAge: (age: number) => void;
}

const { age }: { age: number } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
