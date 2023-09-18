//Computer problem series #1: Fill the Hard Disk Drive
/* Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue. */

function save(sizes, hd) {
  let spaceUsed = 0;
  let numFiles = 0;
  for (i=0; i<sizes.length; i++) {
    if ((spaceUsed+sizes[i]) > hd) {
      break;
    }
    spaceUsed+=sizes[i];
    numFiles++;
  }
  return numFiles;
}
