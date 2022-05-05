package com.springbeans.bookstore;

import org.springframework.beans.factory.annotation.Autowired;

public class Book {
    private String name;
    private String code;

    @Autowired
    BookAuthor bookAuthor;

    public BookAuthor getBookAuthor() {
        return bookAuthor;
    }

    public void setBookAuthor(BookAuthor bookAuthor) {
        this.bookAuthor = bookAuthor;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void show(){
        System.out.println(this.name + " - " + this.code);
        bookAuthor.showAuthor();
    }
}
