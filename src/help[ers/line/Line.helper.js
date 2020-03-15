export function checkLine(i, j, k, l) {

    const firstNotNull = i !== null;
    const secondEqual = j === i;
    const thirdEqual = k === i;
    const fourthEqual = l === i;

    return firstNotNull && secondEqual && thirdEqual && fourthEqual;
}
