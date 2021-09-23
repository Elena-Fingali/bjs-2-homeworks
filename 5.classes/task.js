//Задача 1
class PrintEditionItem{
    constructor(name,releaseDate,pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix(){
        this.state *=1.5;
        this.state = this._state;
        return this._state;
    }
    set state(fix){
        if(fix<0){ 
           this._state = 0;
        } else if(fix>100){
            this._state = 100;
        } else {
            this._state = fix;
        }
    }
    get state(){
        return this._state;
    }
}
class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate,pagesCount);
        this.type = "magazine";
    }

}
class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}
class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}
class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//Задача 2

class Library {
    constructor(name, books){
        this.name = name;
        this.books = [];
        }

    addBook(book){
        if(book.state>30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        let result = this.books.filter((book)=> book[type] === value);
        if (result.length === 0){
            return null;
        } else {
            return result[0];
        }   
    }
    
    giveBookByName(bookName) {
        let result = this.books.filter((book) => book.name === bookName)[0];
        if(result === undefined){
            return null;
        } else {
            this.books.splice(this.books.indexOf(result),1);
            return result;
        }
    
    }
};

 