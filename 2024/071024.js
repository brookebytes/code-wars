// Is the date today - 8kyu
/* Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not. */

const isToday = date => new Date().toDateString() == date.toDateString();
