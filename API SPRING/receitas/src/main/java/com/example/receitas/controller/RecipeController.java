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

import com.example.receitas.repository.RecipeRepository;
import com.example.receitas.model.Recipe;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
@CrossOrigin("*")
public class RecipeController {

    @Autowired
    RecipeRepository repository;

    @GetMapping("/recipe")
    public List<Recipe> getAllRecipes(){
        return repository.findAll();
    }
    
    @GetMapping("/recipe/{id}")
    public Recipe getRecipeById(@PathVariable Long id) {
        return repository.findById(id).get();
    }

    @PostMapping("/recipe")
    public Recipe saveRecipe(@RequestBody Recipe recipe) {
        return repository.save(recipe);
    }

    @DeleteMapping("/recipe/{id}")
    public void deleteRecipe(@PathVariable Long id) {
        repository.deleteById(id);
    }

}

