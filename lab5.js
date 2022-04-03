
function sum(arr) {
    return arr.filter(elem => elem > 20).reduce((res, current) => res + current, 0);
}

const getNewArray = function(arr) {
    return arr.filter(elem => elem.includes('a')).filter(elem => elem.length >= 5);
}

console.log(sum([100, -20, 21, 15, 1, 0, 20]));
console.log(getNewArray(['wap', 'lebap', 'tina', 'hi', 'course', 'shazam']));
