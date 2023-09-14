// const Math=require('./Math.js'); //common JS --> anciently
    import pow from './Math.mjs'
    //  import pow , {squareRoot} from './Math.mjs'
    // import * as Math -> this also a syntax
    import chalk from 'chalk';
    function circleArea(radius) {
    const pI = 3.14159;
    return pI * Math.pow(radius, 2);//this for require

}
//all of this to create modules and libraries fo us 
 function circleCircumference(radius) {
    if (radius < 0) {
        return "Radius cannot be negative";
    }

    const pI = 3.14159;
    const circumference = 2 * pI * radius;
    return circumference;
}

// console.log(`circlecircusmeference ${circleCircumference(5)}`)
// console.log(chalk.red('Hello IAM RED'));//this only for terminal
console.log(chalk.bgMagenta('Hello its bgMagenta'))
