package com.springbeans.bookstore;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public Book getBook(){
        return new Book();
    }
    // <bean id="book" class="com.springbeans.bookstore.Book"/>  -- XML

    @Bean
    public BookAuthor getBookAuthor(){
        return new Author();
    }
}
