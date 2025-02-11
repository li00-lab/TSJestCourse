import exp from "constants";
import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  it("should return upper case of a valid string", () => {
    // arrange:
    const sut = toUpperCase;
    const expected = "ABC";

    // act:
    const actual = sut("abc");

    // assert
    expect(actual).toBe(expected);
  });

  // parameterized tests
  describe("ToUpperCaseExamples", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "mystring", expected: "MYSTRING" },
      { input: "def", expected: "DEF" },
    ])("$input to uppercase should be $expected", ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe("getStringInfo for arg My-String should", () => {
    it("should return right legth", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters).toHaveLength(9);
    });

    it("should return lower case", () => {
      const actual = getStringInfo("My-String");
      expect(actual.lowerCase).toBe("my-string"); // for primitive types comparision
    });

    it("should return upper case", () => {
      const actual = getStringInfo("My-String");
      expect(actual.upperCase).toBe("MY-STRING"); // for primitive types comparision
    });

    it("should return right characters", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters).toEqual([
        "M",
        "y",
        "-",
        "S",
        "t",
        "r",
        "i",
        "n",
        "g",
      ]); // for exact array comparision

      expect(actual.characters).toEqual(
        expect.arrayContaining(["S", "t", "r", "i", "n", "g", "M", "y", "-"]) // to test for sub arrays or arrays with different order.
      );
      expect(actual.characters).toContain<string>("M"); // check for string array
    });

    it("should return defined extra info", () => {
      const actual = getStringInfo("My-String");
      expect(actual.extraInfo).toEqual({}); // for object comparision
      expect(actual.extraInfo).toBeDefined();
    });

    it("should return right extra info", () => {
      const actual = getStringInfo("My-String");
      // testing objects
      expect(actual.extraInfo).not.toBe(undefined);
      expect(actual.extraInfo).not.toBeUndefined;
      expect(actual.extraInfo).toBeTruthy();
    });
  });
});
