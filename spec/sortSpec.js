const sorts = [
  require("../insertionSort"),
  require("../bubbleSort"),
  require("../mergeSort"),
  require("../quickSort"),
  require("../recursiveRadix"),
  require("../iterativeRadix")
];

describe("Sorting algorithms should", () => {
  for (let sort of sorts) {
    it("return an empty array when passed one", () => {
      const result = sort([]);

      expect(Array.isArray(result)).toBeTruthy();
      expect(result.length).toEqual(0);
    });

    it("return a new array", () => {
      const inputs = [[1, 2, 3, 4, 5], []];
      for (let input of inputs) {
        const output = sort(input);

        expect(output).not.toBe(input, sort.name);
      }
    });

    it("properly sort a given array", () => {
      const input = [2, 4, 1, 2, 3, 6, 3, 1, 7, 834, 32, 346, 2, 3, 6];
      const sorted = input.slice().sort((a, b) => a - b);
      const output = sort(input);

      expect(output).toEqual(sorted);
    });

    it("handle sorting large random arrays", () => {
      const input = [...Array(1000)].map(() => Math.floor(Math.random() * 100));
      const sorted = input.slice().sort((a, b) => a - b);
      const output = sort(input);

      expect(output).toEqual(sorted);
    });
  }
});
