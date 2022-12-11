function pow(num, degree) {
  if (degree > 1) {
    return num * pow(num, degree - 1);
  } else return num;
}
console.log(pow(2, 3));
