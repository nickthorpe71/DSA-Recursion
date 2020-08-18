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

function findPaths(maze, pos = [[0, 0]], paths = [''], mazes = [maze], completed = [false]) {
  let completedPaths = 0;
  let newPaths = paths.filter(item => typeof item !== 'undefined');
  let newPos = pos.filter(item => typeof item !== 'undefined');
  let newMazes = mazes.filter(item => typeof item !== 'undefined');
  let newCompleted = completed.filter(item => typeof item !== 'undefined');

  for (let i = 0; i < newPaths.length; i++) {
    if (maze[newPos[i][1]][newPos[i][0]] === 'e') {
      completedPaths++;
      newCompleted[i] = true;
    }
  }

  if (completedPaths === paths.length) {
    return paths;
  }



  for (let i = 0; i < paths.length; i++) {

    if (newCompleted[i] === false) {
      let openDirections = [];

      if (pos[i][1] + 1 < maze.length) {
        //if node down is open or we are at the end of this row
        const checkDown = newMazes[i][pos[i][1] + 1][pos[i][0]];
        if (checkDown === ' ' || pos[i][0] === newMazes[i][pos[i][1]].length || checkDown === 'e') {
          openDirections.push('D');
        }
      }

      if (pos[i][0] + 1 < newMazes[i][pos[i][1]].length) {
        //if node right is open
        const checkRight = newMazes[i][pos[i][1]][pos[i][0] + 1];
        if (checkRight === ' ' || checkRight === 'e') {
          openDirections.push('R');
        }
      }

      //if node left is open
      if (pos[i][0] - 1 >= 0) {
        const checkLeft = newMazes[i][pos[i][1]][pos[i][0] - 1];
        if (checkLeft === ' ' || checkLeft === 'e') {
          openDirections.push('L');
        }
      }

      //if node up is open
      if (pos[i][1] - 1 >= 0) {
        const checkUp = newMazes[i][pos[i][1] - 1][pos[i][0]];
        if (checkUp === ' ' || checkUp === 'e') {
          openDirections.push('U');
        }
      }

      //if there are not directions left for the path then remove it
      if (typeof openDirections[0] === 'undefined' || openDirections.length === 0) {
        delete newPos[i];
        delete newPaths[i];
        delete newMazes[i];
        delete newCompleted[i];
      } else {
        if (openDirections.length > 1) {
          newPaths[i] += openDirections[0];
          newPos[i] = adjustPosition(pos[i], openDirections[0]);
          newMazes[i][pos[i][1]][pos[i][0]] = 'v';
          for (let j = 1; j < openDirections.length; j++) {
            newPaths.push(paths[i] += openDirections[j]);
            newPos.push(adjustPosition(pos[i], openDirections[j]));

            const mazeToPush = newMazes[i].map(row => {
              return [...row];
            });

            newMazes.push(mazeToPush);
            newCompleted.push(false);
          }
        } else {
          newPaths[i] += openDirections[0];
          newPos[i] = adjustPosition(pos[i], openDirections[0]);
          newMazes[i][pos[i][1]][pos[i][0]] = 'v';
        }
      }
    }
  }

  return findPaths(maze, newPos, newPaths, newMazes, newCompleted);
}

function adjustPosition(pos, dirStr) {
  if (dirStr === 'D')
    return [pos[0], pos[1] + 1];
  if (dirStr === 'R')
    return [pos[0] + 1, pos[1]];
  if (dirStr === 'L')
    return [pos[0] - 1, pos[1]];
  if (dirStr === 'U')
    return [pos[0], pos[1] - 1];
}

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(findPaths(maze));


// function findAPath(maze, pos = [0, 0], path = '') {

//   if (maze[pos[1]][pos[0]] === 'e') {
//     console.log('found it!');
//     return path;
//   }

//   if (pos[1] + 1 < maze.length) {
//     //if node down is open or we are at the end of this row
//     if (maze[pos[1] + 1][pos[0]] === ' '
//       || pos[0] === maze[pos[1].length]
//       || maze[pos[1] + 1][pos[0]] === 'e') {
//       console.log('down');
//       const newPos = [pos[0], pos[1] + 1];
//       maze[pos[1]][pos[0]] = 'v';
//       const newPath = path += 'D';
//       return findAPath(maze, newPos, newPath);
//     }
//   }

//   if (pos[0] + 1 < maze[pos[1]].length) {
//     //if node right is open
//     if (maze[pos[1]][pos[0] + 1] === ' ' || maze[pos[1]][pos[0] + 1] === 'e') {
//       console.log('right');
//       const newPos = [pos[0] + 1, pos[1]];
//       maze[pos[1]][pos[0]] = 'v';
//       const newPath = path += 'R';
//       return findAPath(maze, newPos, newPath);
//     }
//   }

//   //if node left is open
//   if (pos[0] - 1 > 0) {
//     if (maze[pos[1]][pos[0] - 1] === ' ' || maze[pos[1]][pos[0] - 1] === 'e') {
//       console.log('left');
//       const newPos = [pos[0] - 1, pos[1]];
//       maze[pos[1]][pos[0]] = 'v';
//       const newPath = path += 'L';
//       return findAPath(maze, newPos, newPath);
//     }
//   }

//   //if node up is open
//   if (pos[1] - 1 > 0) {
//     if (maze[pos[1] - 1][pos[0]] === ' ' || maze[pos[1] - 1][pos[0]] === 'e') {
//       console.log('up');
//       const newPos = [pos[0], pos[1] - 1];
//       maze[pos[1]][pos[0]] = 'v';
//       const newPath = path += 'U';
//       return findAPath(maze, newPos, newPath);
//     }
//   }
// }