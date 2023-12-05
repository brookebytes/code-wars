//Compare within margin - 8kyu

function closeCompare(a, b, margin){
  margin = margin || 0;
  return Math.abs(a-b)<=margin ? 0 : a<b ? -1 : 1;
}

