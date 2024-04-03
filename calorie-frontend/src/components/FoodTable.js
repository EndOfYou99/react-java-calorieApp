import React from 'react';

function FoodsTable({ foods, handleAddToList }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Calories</th>
          <th>Protein</th>
          <th>Carbs</th>
          <th>Fat</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {foods.map(food => (
          <tr key={food.id}>
            <td>{food.id}</td>
            <td>{food.name}</td>
            <td>{food.calories}</td>
            <td>{food.protein}</td>
            <td>{food.carbs}</td>
            <td>{food.fat}</td>
            <td>
              <button
                className="btn btn-primary"
                onClick={() => handleAddToList(food)}
              >
                Add
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FoodsTable;
