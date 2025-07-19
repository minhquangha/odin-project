// refactor using class
class Book {
    #name;
    #author;
    #pages;
    constructor(name, author, pages) {
        this.#name = name;
        this.#author = author;
        this.#pages = pages;
    }
    getName(){
        return this.#name;
    }
    getAuthor(){
        return this.#author;
    }
    getPages(){
        return this.#pages;
    }
}

class Library{
    #myLibrary
    constructor(){
        this.#myLibrary= [];
    }

    getLibrary(){
        return this.#myLibrary;
    }

    addBook(book){
        this.#myLibrary.push(book);
    }

    display(containerSelector) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = '';
    this.#myLibrary.forEach(book => {
      const card = document.createElement('div');
      card.innerHTML = `
        <p><strong>name:</strong> ${book.getName()}</p>
        <p><strong>author:</strong> ${book.getAuthor()}</p>
        <p><strong>pages:</strong> ${book.getPages()}</p>
        <button class='delete'>Delete</button>
      `;
      card.setAttribute('id', book.uid);
      container.appendChild(card);
    });
  }
}

const library = new Library();

const book1 = new Book('Harry Potter', 'James', 130);
library.addBook(book1);

library.display('.content');
