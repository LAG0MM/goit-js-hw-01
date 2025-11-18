function getElementWidth(content, padding, border) {
  const paddingNum = parseFloat(padding);
  const borderNum = parseFloat(border);
  const contentNum = parseFloat(content);

  const total = contentNum + 2 * paddingNum + 2 * borderNum;
  return total;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));