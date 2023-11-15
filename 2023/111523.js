//Find Screen Size

function findScreenHeight(width, ratio) {
  let ratioArr = ratio.split(":");
  let percent = ratioArr[1]/ratioArr[0];
  return `${width}x${width*percent}`;
}
