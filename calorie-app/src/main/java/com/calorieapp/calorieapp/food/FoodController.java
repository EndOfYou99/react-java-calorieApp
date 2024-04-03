package com.calorieapp.calorieapp.food;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/foods")
public class FoodController {

	@Autowired
	private FoodService foodService;

	@GetMapping("/getAll")
	@CrossOrigin(origins = "http://localhost:3000")
	private ResponseEntity<List<Food>> getAll() {
		return new ResponseEntity<List<Food>>(foodService.getAll(), HttpStatus.OK);
	}

	@PostMapping("/save")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Food> createFood(@RequestBody Food food) {
		Food createdFood = foodService.saveFood(food);
		return new ResponseEntity<>(createdFood, HttpStatus.CREATED);
	}

	@PostMapping("/totalNutrients")
	@CrossOrigin(origins = "http://localhost:3000")
	public TotalNutrientAmount getTotalNutrients(@RequestBody List<Food> foods) {
		return foodService.calculateTotalNutrients(foods);
	}

}
