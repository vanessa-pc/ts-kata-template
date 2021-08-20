/**
 * Count duplicate characters of the input string
 * @param string- the input string
 * @returns the count of duplicate elements
 */
function countDuplicates(string: string): number {
  const array = string.toLowerCase().split(""); // case insensitive array
  interface countObject {
    [key: string]: number;
  }
  const count: countObject = {};
  let duplicates = 0;
  array.forEach(function (element: string): void {
    count[element] = (count[element] || 0) + 1;
  }); // make object with the element and their coutns as key-value pair
  for (const value of Object.values(count)) {
    // iterate over object values to find how many duplicate characters there are
    if (value > 1) {
      duplicates++;
    }
  }
  return duplicates;
}

export default countDuplicates;
