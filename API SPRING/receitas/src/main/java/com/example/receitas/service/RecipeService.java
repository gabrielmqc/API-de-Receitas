package com.example.receitas.service;

import com.example.receitas.model.Recipe;
import com.example.receitas.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    public Recipe getRecipeById(Long id) {
        return recipeRepository.findById(id).orElse(null);
    }

    public Recipe createRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public Recipe updateRecipe(Long id, Recipe recipe) {
        Recipe existingRecipe = recipeRepository.findById(id).orElse(null);
        if (existingRecipe != null) {
            existingRecipe.setNome(recipe.getNome());
    
            existingRecipe.setModoDePreparo(recipe.getModoDePreparo());
            existingRecipe.setPorcoes(recipe.getPorcoes());
            existingRecipe.setTipo(recipe.getTipo());
            return recipeRepository.save(existingRecipe);
        }
        return null;
    }

    public void deleteRecipe(Long id) {
        recipeRepository.deleteById(id);
    }
}
