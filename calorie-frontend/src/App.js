// App.js
import {useState, React} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FoodsList from './components/FoodList';
import AddFood from './components/AddFood';

function App() {
  const [addedList, setAddedList] = useState([]);

  return (
    <Router>
      <Routes>
                <Route
          path="/"
          element={<FoodsList addedList={addedList} setAddedList={setAddedList} />}
        />
        <Route path="/add" element={<AddFood />} />
      </Routes>
    </Router>
  );
}

export default App;
