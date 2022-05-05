package com.springbeans.bookstore;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.AbstractApplicationContext;

public class App {
    public static void main(String[] args) {
        ApplicationContext factory = new AnnotationConfigApplicationContext(AppConfig.class);
        Book book = factory.getBean(Book.class);
        book.setName("Harry Potter");
        book.setCode("HP34520");

        Author author = factory.getBean(Author.class);
        author.setName("J.K Rowling");

        book.show();

        Book book2 = factory.getBean(Book.class);
        book2.setName("Lord of the rings");
        book2.setCode("LR23122");

        Author author2 = factory.getBean(Author.class);
        author2.setName("J.R.R Tolkien");

        book2.show();

        ((AbstractApplicationContext) factory).close();
    }
}
