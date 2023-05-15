const grid = [];
const rows = 9; //sets the number of rows to 9
const columns = 9; //sets number of columns in grid to 9

for (let i = 0; i <= rows; i++) { //this creates a loop that starts at 0 and ends when i is less than or equal to the number of rows
  const row = [];

  for (let j = 0; j <= columns; j++) { //this creates a loop that starts at 0 and ends when j is less than or equal to the number of rows
    const amount = i * j;
    row.push(amount);
  }

  grid.push(row);
}

console.table(grid); //this displays the grid in the console!!

//code above is the Assignment 1 of Week 5 :)
