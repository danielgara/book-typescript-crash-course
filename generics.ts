const bookPageCounts = [256, 320, 480, 192, 400];
const popularGenres = ["mystery", "romance", "science fiction", "fantasy"];
const authors = [
  { name: "Jane", booksPublished: 5 },
  { name: "Mark", booksPublished: 12 }
];

function getLastItem<Type>(array: Type[]): Type | undefined {
  if (array.length === 0) {
    return undefined;
  }
  return array[array.length - 1];
}

// Example usage:
console.log(getLastItem(bookPageCounts)); // 400
console.log(getLastItem(popularGenres)); // "fantasy"
console.log(getLastItem(authors)); // { name: "Mark", booksPublished: 12 }
