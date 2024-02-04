//Pretty date - 6kyu

function toPretty(seconds) {
  if (seconds == 0) {
    return "just now";
  }
   else if (seconds < 60) {
    return seconds==1 ? "a second ago" : `${seconds} seconds ago`;
  }
  else if (seconds < 3600) {
    return seconds<120 ? "a minute ago" : `${Math.floor(seconds/60)} minutes ago`;
  }
  else if (seconds < 86400) {
    return seconds < 7200 ? "an hour ago" : `${Math.floor(seconds/3600)} hours ago`;
  }
  else if (seconds < 604800) {
    return seconds < 172800 ? "a day ago" : `${Math.floor(seconds/86400)} days ago`;
  }
  else {
    return seconds < 1209600 ? "a week ago" : `${Math.floor(seconds/604800)} weeks ago`;
    }
}
