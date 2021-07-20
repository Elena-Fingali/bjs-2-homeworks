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
        this.state = this._state;
        return this._state;
    }
    set state(fix){
        fix*=1.5;
        if(fix<0){ this._state = 0;
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

class Library extends PrintEditionItem {
    constructor(name,books){
        super(name,books);
        this.name = name;
        this.books = [ ];
    }
    addBook(book){
        if(this.state>30){
            this.books.push(book);
        }
    }
    findBookBy(type, value){
        let findBookFor = this.books.find((item) => item[type] === value);
        if (findBookFor){
            return this.findBookFor;
        } else {
            return null;
        }
    }
    giveBookByName(bookName){
        let giveBook = this.findBookBy(bookName);
        if(giveBook){
            splice(this.findBookFor);
              
        } 
        return this.findBookFor;
    }
}

 