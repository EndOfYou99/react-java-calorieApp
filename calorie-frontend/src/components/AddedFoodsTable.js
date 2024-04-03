import React from 'react';

function AddedFoodsTable({ addedList, handleRemoveFromList }) {
  return (
    <table className="table table-bordered">
      <thead style={{ visibility: 'hidden' }}>
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
        {addedList.map(food => (
          <tr key={food.addedId}>
            <td>{food.id}</td>
            <td>{food.name}</td>
            <td>{food.calories}</td>
            <td>{food.protein}</td>
            <td>{food.carbs}</td>
            <td>{food.fat}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveFromList(food.addedId)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AddedFoodsTable;
