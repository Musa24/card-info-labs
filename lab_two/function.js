//Функция должна возвращать аргумент, переданный ей в качестве параметра
function returnName(name) {
  return name;
}

let myName = returnName('Musa');
console.log(myName);

//Функция должна возвращать сумму переыданных аргументов
function sum(...nums) {
  //sum all the numbers
  let total = nums.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 3, 54, 5, 4, 4, 5));

// Пройтись по массиву и каждый его элемент возвести в квадрат ,если элемент в массиве не число то превратить его в 0 (массива придумайте сами)

function squareArray(array) {
  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    if (typeof el === 'number') {
      array[i] = Math.pow(el, 2);
    } else {
      array[i] = 0;
    }
  }
  return array;
}

console.log(squareArray([1, 2, 'a', '13', 'Musa']));
