import { bowlingTotalScore } from "./bowling"

describe("bowlingTotalScore", () => {
  test("throws an error if no rolls passed", () => {
    expect(() => {
      bowlingTotalScore()
    }).toThrow("rolls is required");

    expect(() => {
      bowlingTotalScore("")
    }).toThrow("A rolls of type Array is required");
  });

  test.each([
    [["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"], 300],
    [["9-", "9-", "9-", "9-", "9-", "9-", "9-", "9-", "9-", "9-"], 90],
    [["8-", "8-", "8-", "8-", "8-", "8-", "8-", "8-", "8-", "8-"], 80],
    [["-5", "-5", "-5", "-5", "-5", "-5", "-5", "-5","-5", "-5"], 50],
    [["5/", "5/", "5/", "5/", "5/", "5/", "5/", "5/", "5/", "5/6"], 160],
    [["5/", "5/", "5/", "5/", "5/", "5/", "5/", "5/", "5/", "5/9"], 190],
    [["5/", "5/", "5/", "5/", "5/", "5/", "5/", "5/", "5/", "X", "X", "X"], 300]  
  ])(
    `gives a sequence %p to produce a total score %p`,
    (rolls, result) => {
      expect(bowlingTotalScore(rolls)).toEqual(result)
    }
  ); 
})
