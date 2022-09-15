import React, { useState } from 'react';
import { Input, Divider, Button } from 'antd';

const AddFoodForm = (props) => {
  const [nameEntry, setNameEntry] = useState('');
  const [imageEntry, setImageEntry] = useState('');
  const [caloriesEntry, setCaloriesEntry] = useState();
  const [servingsEntry, setServingsEntry] = useState();

  const handleClick = () => {
    const newFood = {
      name: nameEntry,
      image: imageEntry,
      calories: caloriesEntry,
      servings: servingsEntry,
    };
    props.addNewFood(newFood);
    setNameEntry('');
    setImageEntry('');
    setCaloriesEntry('');
    setServingsEntry('');
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Divider>Add Food Entry</Divider>
      <form style={{ width: 450 }}>
        <Input
          placeholder="Name"
          value={nameEntry}
          type="text"
          onChange={(e) => setNameEntry(e.target.value)}
          style={{ marginBottom: '5px', border: '1 solid black' }}
        />

        <Input
          placeholder="Image"
          value={imageEntry}
          type="text"
          onChange={(e) => setImageEntry(e.target.value)}
          style={{ marginBottom: '5px', border: '1 solid black' }}
        />

        <Input
          placeholder="Calories"
          value={caloriesEntry}
          type="number"
          onChange={(e) => setCaloriesEntry(e.target.value)}
          style={{ marginBottom: '5px', border: '1 solid black' }}
        />

        <Input
          placeholder="Servings"
          value={servingsEntry}
          type="number"
          onChange={(e) => setServingsEntry(e.target.value)}
          style={{ marginBottom: '5px', border: '1 solid black' }}
        />
        <Button onClick={handleClick}> Create </Button>
      </form>
    </div>
  );
};

export default AddFoodForm;
