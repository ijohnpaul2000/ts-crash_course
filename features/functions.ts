const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(1, 2));

const forecast = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};
