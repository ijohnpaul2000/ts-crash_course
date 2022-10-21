const last = <T>(arr: T[]) => {
  return arr[arr.length - 1];
};

const l = last([1, 2, 3]);
const l2 = last(["a", "b", "c"]);

console.log(l, l2);

interface Person<T, X> {
  name: string;
  age: number;
  data: T;
  meta: X;
}

const printPerson = <T, X>(person: Person<T, X>) => {
  console.log(person);
};

printPerson({ name: "alex", age: 20, data: "hello", meta: "world" });
printPerson({ name: "alex", age: 20, data: false, meta: false });
