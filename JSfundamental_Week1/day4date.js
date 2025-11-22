// how can we get the current date and time - universal time will be shown

const now = new Date();

// console.log(now); // this will show full date + time in default format

console.log(now.toString());   // this will show my local time (Nepal time)

console.log(now.toLocaleTimeString()); // this will show only the time in Nepal format

console.log(now.getDate()); // todays date
console.log(now.getDay()); // get date
console.log(now.getMonth()); // get month
console.log(now.getHours()); // get hour 
//  there are multiple things to do 
