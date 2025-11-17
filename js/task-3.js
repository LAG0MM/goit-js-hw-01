function getElementWidth (content, padding, border) {
    let paddingNum = parseFloat(padding)
    let borderNum = parseFloat(border)
    let contentNum = parseFloat(content)
    let total = contentNum + 2 * paddingNum + 2 * borderNum
    console.log(total)
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));