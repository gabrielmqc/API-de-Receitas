package com.example.receitas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.receitas.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
    
}
