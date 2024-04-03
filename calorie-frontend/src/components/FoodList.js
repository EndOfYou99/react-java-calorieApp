import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../AppService';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodsTable from './FoodTable';
import AddedFoodsTable from './AddedFoodsTable';

function App({ addedList, setAddedList }) {
  const [foods, setFoods] = useState([]);
  const [totalNutrients, setTotalNutrients] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [nextId, setNextId] = useState(1);

  useEffect(() => {
    async function fetchFoods() {
      try {
        const foods = await ApiService.getAllFoods();
        setFoods(foods);
      } catch (error) {
        // Handle error
      }
    }
    fetchFoods();
  }, []);

  const handleSearch = async (value) => {
    setSearchTerm(value);
    try {
      const foods = await ApiService.getAllFoods();
      const filteredFoods = foods.filter(food =>
        food.name.toLowerCase().includes(value.toLowerCase())
      );
      setFoods(filteredFoods);
    } catch (error) {
      // Handle error
    }
  };

  const handleAddToList = (food) => {
    const newFood = { ...food, addedId: nextId };
    setNextId(prevId => prevId + 1);
    setAddedList(prevList => [...prevList, newFood]);
  };

  const handleRemoveFromList = (addedId) => {
    setAddedList(prevList => prevList.filter(food => food.addedId !== addedId));
  };

  useEffect(() => {
    async function fetchTotalNutrients() {
      try {
        const totalNutrients = await ApiService.getTotalNutrients(addedList);
        setTotalNutrients(totalNutrients);
      } catch (error) {
        // Handle error
      }
    }
    fetchTotalNutrients();
  }, [addedList]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <h1 className="text-center">List of Foods</h1>
          <div className="text-center">
            <Link to="/add" className="btn btn-success">Add Food</Link>
          </div>
          <br></br>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a food..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          <FoodsTable foods={foods} handleAddToList={handleAddToList} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col">
          {totalNutrients && (
            <div className="row justify-content-center">
              <div className="col">
                <h2 className="text-center">Total Nutrients</h2>
                <div className="row justify-content-center">
                  {Object.entries(totalNutrients).map(([key, value]) => (
                    <div className="col-auto" key={key}>
                      <p><strong>{key}:</strong> {value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <AddedFoodsTable addedList={addedList} handleRemoveFromList={handleRemoveFromList} />
        </div>
      </div>
    </div>
  );
}

export default App;
