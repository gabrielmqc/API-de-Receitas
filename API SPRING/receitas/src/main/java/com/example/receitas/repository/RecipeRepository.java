package com.example.receitas.repository;

import com.example.receitas.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    // Você pode adicionar métodos personalizados de consulta aqui, se necessário
}
