//Are there any arrows left? - 8kyu

function anyArrows(arrows){
  // arrow it
  return arrows.some(arrow => !arrow.damaged);
}
