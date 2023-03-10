// По общепринятому соглашению, lodash импортируется под именем _
import _ from 'lodash';

console.log(Math.round(5.34));

// Пересечение массивов
console.log(_.intersection([2, 1], [2, 3])); // => [2]

// capitalize делает первую букву заглавной
console.log(_.capitalize('hello')); // Hello

console.log(_.last(['one', 'two']));

const fn = (a, b) => {
  const c = a + b;
  return c;
};
