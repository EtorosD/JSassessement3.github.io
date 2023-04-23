console.log("connected");

function Car (Brand, Model, Year, Color, Mileage, Price ){
    this.Brand = Brand;
    this.Model = Model;
    this.Year = Year;
    this.Color = Color;
    this.Mileage = Mileage;
    this.Price = Price;
}

var cars = [
    new Car ("Mitsubishi", "Xpander", "2020", "BLue", "1800 km", "1000000"),
    new Car ("Toyota", "Rush", "2019", "Black", "3200 km", "900000" ),
    new Car ("Honda", "Brv", "2022", "Red", "1000 km", "12000000")
  ];

console.log(cars);

function calculateAveragePrice(cars) {
    var total = 0;
    for (var i = 0; i < cars.length; i++) {
      total += cars[i].Price;
    }
    var average = total / cars.length;
    return average;
  }

  var cars = [
    new Car ("Mitsubishi", "Xpander", "2020", "BLue", "1800 km", "1000000"),
    new Car ("Toyota", "Rush", "2019", "Black", "3200 km", "900000" ),
    new Car ("Honda", "Brv", "2022", "Red", "1000 km", "12000000")
  ];
  
  var averagePrice = calculateAveragePrice(cars);
  
  console.log('The average of all the prices is', averagePrice);

  function Book (title, author, pages, year, genre){
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Year = year;
    this.Genre = genre;
  }

var Books = [
    new Book ("Don Quixote", "Miguel de Cervantes", "1072", "1605", "Novel"),
    new Book ("Don Quixote", "Miguel de Cervantes", "1072", "1605", "Novel")
];

console.log(Books);

function booksGenre (Book, genre) {
    const title = [];
    for (let i = 0; i < Books.length; i++) {
        if (Books[i].Genre === genre) {
            title.push(Books[i].Title);
        }
    }
    return title;
}

booksByGenre = booksGenre(Books, 'Novel');
console.log(booksByGenre);

const cart = [
  {name: "Pillow",      price: 25,  quantity: 6},
  {name: "pillow case", price: 15,  quantity: 20},
  {name: "Bed Sheet",   price: 50,  quantity: 2},
  {name: "Bed Foam",    price: 30,  quantity: 8},
]

console.log(cart);

function calculateCartTotal(cart) {
  const total = cart.reduce((allItemsCost, currentItem) => {
    return allItemsCost + (currentItem.price * currentItem.quantity);
  }, 0);
  return total;
}

totalCost = calculateCartTotal(cart);
console.log(`Total cost:`, totalCost)

priceAndQuantity = cart.filter((elem) => {
  return elem.price >= 20 && elem.quantity >= 5;
    });

  console.log(priceAndQuantity);

getItemsAbovePrice = cart.filter((elem) => {
  return elem.price > elem.quantity
});

console.log(getItemsAbovePrice);

const Student = [
  {name: "David",   grades: [81, 85, 83, 90]},
  {name: "Stephen", grades: [78, 81, 88, 85]},
  {name: "Sorote",  grades: [85, 89, 85, 91]},
]

function calculateAverageGrades(students) {
  const averageGrades = students.map(student => {
    const totalGrade = student.grades.reduce((accumulator, currentGrade) => {
      return accumulator + currentGrade;
    }, 0);
    const averageGrade = totalGrade / student.grades.length;
    const roundedGrade = Math.round(averageGrade * 100) / 100;
    return {
      name: student.name,
      averageGrade: roundedGrade.toFixed(2),
    };
  });
  return averageGrades;
}

averageGrades = calculateAverageGrades(Student);
console.log(averageGrades);