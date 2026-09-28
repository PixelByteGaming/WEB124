//  @author Dylan Gregory
//  @date   9-27-2026

const books = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 310
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        pages: 374
    },
    {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    pages: 309
    },
    {
    title: "Eragon",
    author: "Christopher Paolini",
    pages: 509
    },
    {
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    pages: 423
    }
];


console.log(`\n Console Output`);

books.forEach(book => {
    console.log(`${book.title} by ${book.author} (${book.pages} pages)`);
});


console.log(`\n DOM Tree Exploration`);

console.log(`Entire document: ${document}`);
console.log(`Document body: ${document.body}`);
console.log(`First child of body: ${document.body.children[0]}`);
console.log(`All children of body: ${document.body.children}`);


console.log(`\n Walking the DOM`);

let ulElement = document.body.children[2];
let firstLi = ulElement.children[0];
let parentOfLi = firstLi.parentElement;
let siblingLi = firstLi.nextElementSibling;
console.log(`ulElement: ${ulElement}`);
console.log(`firstLi: ${firstLi}`);
console.log(`parentOfLi: ${parentOfLi}`);
console.log(`siblingLi: ${siblingLi}`);


console.log(`\n Node Properties`);

console.log(firstLi.textContent);


console.log(`\n Styles & Classes`);

let listItems = ulElement.children;
books.forEach((book, index) => {
    if (book.pages > 300) {
        listItems[index].classList.add("featured");
        console.log(`'featured' class was added to the book: ${book.title}`);
    };
});