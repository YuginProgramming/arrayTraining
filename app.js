// Всі методи масивів мають бути різними! 
const array = [5, 23, -110, 3, 18, 0, 14];

//1 a. Вивести в консоль лише непарні числа; 
const odd = array.filter(e => e % 2 !== 0);
const oddString = odd.join(", ");

//2 b. Вивести в консоль масив, кожен елемент якого буде збільшено на 20; 
const plusTwenty = array.map(e => e + 20);

//3 c. Вивести в консоль масив, що складається лише з позитивних непарних чисел; 
const positiveOdd = array.reduce((accumulator, currentValue) => {
    if (currentValue % 2 !== 0 && currentValue > 0) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  
//4 d. Вивести в консоль суму залишків від цілих поділів на 3 кожного елементу. 
const devThree = array.reduce((accumulator, currentValue) => accumulator + (currentValue % 3), 0);

//5 e. Перевірити і вивести в консоль результат перевірки, чи є в масиві число 5. 
const hasFive = array.includes(5);

//6 f.Отримати масив без першого елемента, вивести в консоль. 
const slice = array.slice(1);

//7 g.Відсортувати масив за зростанням, вивести у консоль. 
const sort = array.sort((a, b) => a - b);

//8 h. Визначити, чи є в масиві числа кратні 5.
const multipleFive = array.some(e => e % 5 === 0);