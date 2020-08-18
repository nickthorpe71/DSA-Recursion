// Pre Code
//  -----------------------
// What is the input to the program?
//    input: an object of objects of objects of arrays

// What is the output of the program?
//    output: console logs of the employees in appropriate order

// What is the input to each recursive call?
//    input: the next chart to be processed

// What is the output of each recursive call?
//    output: the remaining chart

const employeeChart = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: [
        'Steve',
        'Kyle',
        'Andra'
      ],
      Zhao: [
        'Richie',
        'Sofia',
        'Jen'
      ]
    },
    Schrage: {
      VanDyck: [
        'Sabrina',
        'Michelle',
        'Josh'
      ],
      Swain: [
        'Blanch',
        'Tom',
        'Joe'
      ]
    },
    Sandberg: {
      Goler: [
        'Eddie',
        'Julie',
        'Annie'
      ],
      Hernandez: [
        'Rowi',
        'Inga',
        'Morgan'
      ],
      Moissinac: [
        'Amy',
        'Chuck',
        'Vinni'
      ],
      Kelley: [
        'Eric',
        'Ana',
        'Wes'
      ]
    }
  }
};

function printChart(chart, tabs = 0) {
  if (chart[0] === 'Wes') {
    return '';
  }

  tabs++;

  for (const p in chart) {
    if (typeof chart[p] === 'object' && chart[p] !== null) {
      let tabStr = '';
      for (let i = 0; i < tabs; i++) { tabStr += '\t'; }
      console.log(`${tabStr}${p}`);
      printChart(chart[p], tabs);
    } else {
      let tabStr = '';
      for (let i = 0; i < tabs; i++) { tabStr += '\t'; }
      console.log(`${tabStr}${chart[p]}`);
    }
  }
}

console.log(printChart(employeeChart));