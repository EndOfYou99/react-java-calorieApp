import React, { useState } from 'react';
import ApiService from '../AppService';
import { useNavigate } from 'react-router-dom';

function AddFood() {
  const [foodData, setFoodData] = useState({
    name: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiService.createFood(foodData);
      navigate('/'); // Redirect to the home page after adding a food
      console.log('Food added successfully:', response);
    } catch (error) {
      console.error('Error adding food:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-4">Add a Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" value={foodData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="calories" className="form-label">Calories</label>
          <input type="number" className="form-control" id="calories" name="calories" value={foodData.calories} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="protein" className="form-label">Protein</label>
          <input type="number" className="form-control" id="protein" name="protein" value={foodData.protein} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="carbs" className="form-label">Carbs</label>
          <input type="number" className="form-control" id="carbs" name="carbs" value={foodData.carbs} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="fat" className="form-label">Fat</label>
          <input type="number" className="form-control" id="fat" name="fat" value={foodData.fat} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}

export default AddFood;
