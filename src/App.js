import './App.css';
import { Card } from 'antd';
import foodsData from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from 'antd/lib/transfer/search';

const App = (props) => {
  const [foods, setFoods] = useState(foodsData);
  const [filteredFoods, setFilteredFoods] = useState(foodsData);

  const filterFoods = (entry) => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(entry.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  const addNewFood = (newFood) => {
    const newFoods = [newFood, ...foods];
    setFoods(newFoods);
  };

  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} />
      <Search filterFoods={filterFoods} />
      {filteredFoods.map((food, index) => {
        return <FoodBox key={index} {...food} />;
      })}
    </div>
  );
};

export default App;
