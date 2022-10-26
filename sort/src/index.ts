import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([0, 5, 4, 10]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
