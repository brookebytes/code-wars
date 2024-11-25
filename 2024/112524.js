// Simple validation of a username with regex - 8kyu
/* Write a simple regex to validate a username that allows lowercase letterse, numbers and underscore characters only. Lengths should be between 4 and 16 characters (both included). */

function validateUsr(username) {
  const res =  /^[a-z0-9_]{4,16}$/.test(username);
  return res;
}
