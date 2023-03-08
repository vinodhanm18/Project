package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Constructions;
import com.example.demo.Repository.Repo1;

@Service
public class ConstructionService {

	@Autowired
	private Repo1 repo;
// addStudent
	public Constructions addConstructions(Constructions obj) {
		return repo.save(obj);
	}

// getStudent
	public List<Constructions> getConstructions() {
		List<Constructions> arr = new ArrayList<>();
		arr = repo.findAll();
		return arr;
	}

	public void deleteId(Long id) {
		repo.deleteById(null);
		// TODO Auto-generated method stub
		
	}
	
	public Constructions update(Long id,Constructions cons) {
		return repo.saveAndFlush(cons);
	}
////deleteById  
//	public void deleteId(Long id) {
//		repo.deleteById(id);
//	}

}