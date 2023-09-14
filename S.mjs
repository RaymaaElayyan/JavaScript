
function squareArea(sideLength) {
    if (sideLength < 0) {
        return "Side length cannot be negative";
    }

    const area = sideLength * sideLength;
    return area;
}

function squareCircumference(sideLength) {
    if (sideLength < 0) {
        return "Side length cannot be negative";
    }

    const perimeter = 4 * sideLength;
    return perimeter;
}