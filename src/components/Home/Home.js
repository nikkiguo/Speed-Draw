import './Home.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Select from 'react-select'


function Home() {
  let navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const options = [
    { value: 'Forest', label: 'Forest' },
    { value: 'Desert', label: 'Desert' },
    { value: 'Cityscape', label: 'Cityscape' },
    { value: 'River', label: 'River' },
    { value: 'Mountain', label: 'Mountain' },
    { value: 'Arctic', label: 'Arctic' },
    { value: 'Clouds', label: 'Clouds' }
  ]

  function handleStart() {
    navigate("/draw", { state: { selectedCategory: category.value } });
  }

  return (
    <div className="Landing">
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"></link>
      <div className="header">
        <h1>SPEED DRAW</h1>
        <h3>online pleine air sketching</h3>
        <div className="option">
          <h2>Select a category:</h2>
          <Select
            defaultValue={options[0]}
            onChange={setCategory}
            options={options} />
        </div>
        <button onClick={handleStart} className="start">Start</button>
      </div>
    </div>
  );
}

export default Home;