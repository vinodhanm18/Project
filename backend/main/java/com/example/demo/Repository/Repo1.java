package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Constructions;
public interface Repo1 extends JpaRepository <Constructions,Integer>
{
	
}