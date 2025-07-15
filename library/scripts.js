const myLibrary = [];
function Book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.uid = crypto.randomUUID();
}
function addBookToLibray(book) {
    myLibrary.push(book);
}

const book1 = new Book('Harry Potter', 'James', 130);
const book2 = new Book('The Hobbit', 'J.R.R. Tolkien', 295);
const book3 = new Book('1984', 'George Orwell', 328);
const book4 = new Book('To Kill a Mockingbird', 'Harper Lee', 281);
const book5 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180);
const book6 = new Book('Pride and Prejudice', 'Jane Austen', 279);
const book7 = new Book('The Catcher in the Rye', 'J.D. Salinger', 214);
const book8 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1178);
const book9 = new Book('The Alchemist', 'Paulo Coelho', 208);
const book10 = new Book('Moby-Dick', 'Herman Melville', 635);

addBookToLibray(book1);
addBookToLibray(book2);
addBookToLibray(book3);
addBookToLibray(book4);
addBookToLibray(book5);
addBookToLibray(book6);
addBookToLibray(book7);
addBookToLibray(book8);
addBookToLibray(book9);
addBookToLibray(book10);
addBookToLibray(book1);

//getData from dialog
const getData = () => {
    const title = document.querySelector('.name').value;
    const author = document.querySelector('.author').value;
    const pages = parseInt(document.querySelector('.pages').value, 10);
    const newBook = new Book(title, author, pages);
    addBookToLibray(newBook);
};

//display book
const line = document.querySelector('.content');
const display = () => {
    line.innerHTML = '';
    myLibrary.forEach((book) => {
        const card = document.createElement('div');
        card.innerHTML = `
      <p><strong>name:</strong> ${book.name}</p>
      <p><strong>author:</strong> ${book.author}</p>
      <p><strong>pages:</strong> ${book.pages}</p>
      <button class='delete'>Delete</button>
    `;
        card.setAttribute('id', book.uid);
        line.appendChild(card);
    });
};
display();

const addBook = document.querySelector('.addBook');
const modal = document.querySelector('#formDialog');
addBook.addEventListener('click', () => {
    modal.showModal();
});
const submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
    getData();
    display();
});
