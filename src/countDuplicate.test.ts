import countDuplicates from "./countDuplicate";

test("count duplicates in string", () => {
  expect(countDuplicates("abcde")).toBe(0);
  expect(countDuplicates("aabBcde")).toBe(2);
});
