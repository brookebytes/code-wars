//Boolean logic from scratch - 7kyu

const or = (a, b) => {
  if (a) {
    return true;
  }
  else if (b) {
    return true;
  }
  return false;
};

const xor = (a, b) => {
  if (a && !b) {
    return true;
  }
  else if (!a && b) {
    return true;
  }
  return false
};
