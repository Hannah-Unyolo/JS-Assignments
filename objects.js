//Given an array of objects, each object representing a person with a name and age property, write a function that returns a new array containing the names of all people who are 18 years old or older.
const people = [
    { name: 'Alice', age: 17 },
    { name: 'Eunice', age: 22 },
    { name: 'Charlie', age: 14 },
    { name: 'Max', age: 19 },
  ];

  const newArr = people.filter(item =>{
    return(item.age>=18)
     
  });
  console.log({newArr});

//Write a function that takes an array of objects, where each object represents a product with a name, price, and category property. The function should return an object that groups the products by their categories, with the category names as keys and the arrays of products as values.
function groupBy(arrOfObjects, category) {
  return arrOfObjects.reduce(function (a, b) {
    const key = b[category];
    if (!a[key]) {
      a[key] = [];
    }
    a[key].push(b);
    return a;
  }, {});
};
const products = [
    { name: 'Laptop', price: 1200, category: 'Electronics' },
    { name: 'Shirt', price: 25, category: 'Clothing' },
    { name: 'Headphones', price: 80, category: 'Electronics' },
    { name: 'Shoes', price: 60, category: 'Clothing' },
  ];
  console.log(groupBy(products,'category'));

//Given an array of objects, where each object represents a student with a name and an array of scores, write a function that returns a new array containing the names of all students whose average score is greater than or equal to 85.
const students = [
  { name: 'John', scores: [90, 80, 85] },
  { name: 'Jane', scores: [95, 92, 88] },
  { name: 'Jim', scores: [70, 80, 75] },
  { name: 'Jill', scores: [85, 90, 84] },
];
function studentScore(number){
  return students.filter(student =>{
    const totalScore = student.scores.reduce((score1,score2)=>score1 + score2) / student.scores.length;
    return totalScore >= 85;
  });
  .map(student=> student.name);
}

console.log(studentScore(students));





