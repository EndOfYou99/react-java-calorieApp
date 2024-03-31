package com.calorieapp.calorieapp.food;

public class TotalNutrientAmount {

	private double totalCalories;
	private double totalProtein;
	private double totalCarbs;
	private double totalFat;

	// Constructors
	public TotalNutrientAmount() {
	}

	public TotalNutrientAmount(double totalCalories, double totalProtein, double totalCarbs, double totalFat) {
		this.totalCalories = totalCalories;
		this.totalProtein = totalProtein;
		this.totalCarbs = totalCarbs;
		this.totalFat = totalFat;
	}

	// Getters and Setters
	public double getTotalCalories() {
		return totalCalories;
	}

	public void setTotalCalories(double totalCalories) {
		this.totalCalories = totalCalories;
	}

	public double getTotalProtein() {
		return totalProtein;
	}

	public void setTotalProtein(double totalProtein) {
		this.totalProtein = totalProtein;
	}

	public double getTotalCarbs() {
		return totalCarbs;
	}

	public void setTotalCarbs(double totalCarbs) {
		this.totalCarbs = totalCarbs;
	}

	public double getTotalFat() {
		return totalFat;
	}

	public void setTotalFat(double totalFat) {
		this.totalFat = totalFat;
	}
}
