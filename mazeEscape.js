// Pre Code
//  -----------------------
// What is the input to the program?
//    input: an array of arrays that create a maze

// What is the output of the program?
//    output: the directions throught me maze to the 'e'

// What is the input to each recursive call?
//    input: the maze, the current position

// What is the output of each recursive call?
//    output: a string defining the directions

function findAPath(maze, pos = [0, 0]) {

  if (maze[pos[1]][pos[0]] === 'e') {
    console.log('found it!');
    return pos;
  }

  if (pos[1] + 1 < maze.length) {
    //if node down is open or we are at the end of this row
    if (maze[pos[1] + 1][pos[0]] === ' '
      || pos[0] === maze[pos[1].length]
      || maze[pos[1] + 1][pos[0]] === 'e') {
      console.log('down');
      const newPos = [pos[0], pos[1] + 1];
      maze[pos[1]][pos[0]] = 'v';
      return findAPath(maze, newPos);
    }
  }

  if (pos[0] + 1 < maze[pos[1]].length) {
    //if node right is open
    if (maze[pos[1]][pos[0] + 1] === ' ' || maze[pos[1]][pos[0] + 1] === 'e') {
      console.log('right');
      const newPos = [pos[0] + 1, pos[1]];
      maze[pos[1]][pos[0]] = 'v';
      return findAPath(maze, newPos);
    }
  }

  //if node left is open
  if (pos[0] - 1 > 0) {
    if (maze[pos[1]][pos[0] - 1] === ' ' || maze[pos[1]][pos[0] - 1] === 'e') {
      console.log('left');
      const newPos = [pos[0] - 1, pos[1]];
      maze[pos[1]][pos[0]] = 'v';
      return findAPath(maze, newPos);
    }
  }

  //if node up is open
  if (pos[1] - 1 > 0) {
    if (maze[pos[1] - 1][pos[0]] === ' ' || maze[pos[1] - 1][pos[0]] === 'e') {
      console.log('up');
      const newPos = [pos[0], pos[1] - 1];
      maze[pos[1]][pos[0]] = 'v';
      return findAPath(maze, newPos);
    }
  }

}

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];


findAPath(maze);