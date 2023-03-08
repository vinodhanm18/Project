package com.example.demo.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.ConstructionService;
import com.example.demo.Entity.Constructions;

@CrossOrigin
@RestController
public class ConstructionController
{
@Autowired
private ConstructionService con;

@GetMapping("/show")
public List<Constructions> showConstructions(){
return con.getConstructions();
}

@PostMapping("/add")
public Constructions addConstructions(@RequestBody Constructions obj) {
return con.addConstructions(obj);
}

@DeleteMapping("/delete/{id}")
public void delConstructions(@PathVariable("id") Long id) {
con.deleteId(id);
}

@PutMapping("/update/{id}")
public Constructions update(@PathVariable Long id,@RequestBody  Constructions cons) {
	return con.update(id,cons);
}
}