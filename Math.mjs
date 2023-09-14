
export default function pow(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

 export function squareRoot(number) {
    if (number < 0) {
        return "Cannot compute square root of a negative number";
    }

    return Math.sqrt(number);
}
// module.export={
//     pow : pow ,
//     squareRoot : squareRoot ,//this without export and import and with mjs
// };/////////////////////////////////////for only j=common js
//modules(export and import which is feom 2015 newer)

