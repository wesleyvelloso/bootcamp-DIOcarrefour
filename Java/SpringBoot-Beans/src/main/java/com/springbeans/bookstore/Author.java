package com.springbeans.bookstore;

public class Author implements BookAuthor{
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void showAuthor(){
        System.out.println(this.name);
    }
}
