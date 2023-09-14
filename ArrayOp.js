const library = [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Moby Dick", author: "Herman Melville", year: 1851 }
  ];
// const in2=library.map(title,author,year)=>({library[2].title})
const extractBook3=` title : ${library[2].title} , authour is${library[2].author} ,year: ${library[2].year} ` ;
console.log(extractBook3)
library.shift(extractBook3)
const removedBook =library[4];
console.log(removedBook);
library.shift(removedBook);
// // console.log(library.unshift(removedBook))
console.log(library)
const publishedyear=library.year.filter(library.year>2000);
console.log(publishedyear)


const in2=[, , {title, author,year},,,];
console.log(in2)
  console.log(library)
  
  library.shift("book 2")
  console.log(library.unshift("book 2"))
  library.push("book2")
  console.log(library)

//   const newArr=[];


