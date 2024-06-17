// Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const date = new Date();

const weekDayInArray = date.getDay();

function weekDay(w) {
  switch (weekDayInArray) {
    case 0: {
      console.log(`Today is: Sunday`);
      break;
    }
    case 1: {
      console.log(`Today is: Monday`);
      break;
    }
    case 3: {
      console.log(`Today is: Tuesday`);
      break;
    }
    case 4: {
      console.log(`Today is: Wednesday`);
      break;
    }
    case 4: {
      console.log(`Today is: Thursday`);
      break;
    }
    case 5: {
      console.log(`Today is: Friday`);
      break;
    }
    case 6: {
      console.log(`Today is: Saturday`);
      break;
    }
  }
}
weekDay(weekDayInArray);

// let hours = date.getHours();
let hours = 23;

let minutes = date.getMinutes();

let seconds = date.getSeconds();

let realHours = hours >= 12 ? hours - 12 : hours;

if (hours >= 12) {
  console.log(`${realHours} PM : ${minutes} : ${seconds} `);
} else {
  console.log(`${realHours} AM : ${minutes} : ${seconds} `);
}
