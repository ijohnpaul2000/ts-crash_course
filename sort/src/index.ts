import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([0, 5, 4, 10]);
const charactersCollection = new CharactersCollection("Xaayb");
const sorter = new Sorter(numbersCollection);
const sorter2 = new Sorter(charactersCollection);
sorter2.sort();
sorter.sort();
console.log(numbersCollection.data);
console.log(charactersCollection.data);
