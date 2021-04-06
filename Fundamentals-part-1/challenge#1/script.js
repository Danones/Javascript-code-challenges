// const marksWeight = 78;
// const marksHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

const marksWeight = 95;
const marksHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;

const calculateBMI = (mass, height) => mass / height ** 2;
const calculateBMIAlternative = (mass, height) => mass /(height * height)

const marksBMI = calculateBMI(marksWeight, marksHeight)
const marksAlternativeBMI = calculateBMIAlternative(marksWeight, marksHeight)

const johnsBMI = calculateBMI(johnWeight, johnHeight)
const johnsAlternativeBMI = calculateBMIAlternative(johnWeight, johnHeight)

const markHigherBMI = marksBMI > johnsBMI;

console.log('Mark\'s BMI is: ', marksBMI);
console.log('John\'s BMI is: ', johnsBMI);

console.log('Mark\'s alternative BMI is: ', marksAlternativeBMI);
console.log('John\'s alternative BMI is: ', johnsAlternativeBMI);
console.log('Is Mark\'s BMI higher than John\'s ? ', markHigherBMI);
