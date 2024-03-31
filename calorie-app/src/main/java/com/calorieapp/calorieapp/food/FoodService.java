package com.calorieapp.calorieapp.food;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoodService {

	@Autowired
	private FoodDao foodDao;

	public List<Food> getAll() {
		return foodDao.findAll();
	}

	public Food saveFood(Food food) {
		return foodDao.save(food);
	}

	public TotalNutrientAmount calculateTotalNutrients(List<Food> foods) {
		double totalCalories = 0;
		double totalProtein = 0;
		double totalCarbs = 0;
		double totalFat = 0;

		for (Food food : foods) {
			totalCalories += food.getCalories();
			totalProtein += food.getProtein();
			totalCarbs += food.getCarbs();
			totalFat += food.getFat();
		}

		return new TotalNutrientAmount(totalCalories, totalProtein, totalCarbs, totalFat);
	}

}
