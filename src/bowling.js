/* Create a program, which, given a valid sequence of rolls for one line of American Ten-Pin Bowling, produces the total score for the game. Here are some things that the program will not do:

We will not check for valid rolls.
We will not check for correct number of rolls and frames.
We will not provide scores for intermediate frames.
*/

/* (When scoring “X” indicates a strike, “/” indicates a spare, “-” indicates a miss)

X X X X X X X X X X X X (12 rolls: 12 strikes) = 10 frames * 30 points = 300
9- 9- 9- 9- 9- 9- 9- 9- 9- 9- (20 rolls: 10 pairs of 9 and miss) = 10 frames * 9 points = 90
5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5 (21 rolls: 10 pairs of 5 and spare, with a final 5) = 10 frames * 15 points = 150
*/

//array as parameter 
//iterate over the array
//conditional statement
// variable that holds 10 no. of frames

export const bowlingTotalScore = rolls => {
  if(rolls === undefined) throw new Error("rolls is required");
  if(!Array.isArray(rolls)) throw new Error("A rolls of type Array is required");
  const frames = 10;
  let points = 0;
  rolls.forEach(roll => {
    if(roll === "X") {
      points += 10
    } else if(roll.includes("-")) {
      points = Number(roll.replace(/[-]/g, " "))
    } else if(roll.includes("/")) {
      points += 10
      if(roll.length > 2) {
        points += Number(roll.charAt(2))
      }
    }
  })
  if(rolls.length >= 10 && points >= 100) {
    points -= 90
  }
  return frames * points
}