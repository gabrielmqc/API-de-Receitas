package com.example.receitas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.receitas.repository.UserRepository;
import com.example.receitas.model.User;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
public class UserController {

    @Autowired
    UserRepository repository;

    @GetMapping("/user")
    public List<User> getAllusers(){
        return repository.findAll();
    }
    
    @GetMapping("/user/{id}")
    public User getuserById(@PathVariable Long id) {
        return repository.findById(id).get();
    }

    @PostMapping("/user")
    public User saveuser(@RequestBody User user) {
        return repository.save(user);
    }

    @DeleteMapping("/user/{id}")
    public void deleteuser(@PathVariable Long id) {
        repository.deleteById(id);
    }

}

