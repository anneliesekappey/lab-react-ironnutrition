import './App.css';
import { Card } from 'antd';
import foodsData from './foods.json';
import { useEffect, useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Button } from 'antd/lib/radio';

const App = (props) => {
  const [foods, setFoods] = useState(foodsData);
  const [filteredFoods, setFilteredFoods] = useState(foodsData);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    filterFoods();
  }, [foods]);

  const filterFoods = (entry = '') => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(entry.toLowerCase())
    );
    setFilteredFoods(filtered);
  };

  const deleteFood = (index) => {
    const newFoods = [...foods];
    newFoods.splice(index, 1);
    setFoods(newFoods);
    filteredFoods('');
  };

  const addNewFood = (newFood) => {
    const newFoods = [newFood, ...foods];
    setFoods(newFoods);
  };

  return (
    <div className="App">
      {showForm && <AddFoodForm addNewFood={addNewFood} />}
      <Button
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        {showForm ? 'Hide Form' : 'Add Food'}
      </Button>
      <Search filterFoods={filterFoods} />

      {filteredFoods.map((food, index) => {
        return (
          <FoodBox
            key={index}
            index={index}
            {...food}
            deleteFood={deleteFood}
          />
        );
      })}
    </div>
  );
};

export default App;
