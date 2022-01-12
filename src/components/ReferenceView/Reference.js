import './Reference.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillCloseSquare } from 'react-icons/ai';
import { useNavigate, useLocation } from "react-router-dom";


function Reference(props) {
  let navigate = useNavigate();
  const [position, setPosition] = useState(0);
  const [result, setResult] = useState([]);
  const { state } = useLocation();
  const { selectedCategory } = state;

  useEffect(() => {
    const url = "https://api.pexels.com/v1/search?query=" + selectedCategory + "&per_page=20";
    const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

    axios.get(url, {
      headers: {
        'Authorization': `${API_KEY}`
      }
    }).then(data => {
      setResult(data.data.photos);
    }).catch(error => {
      console.log(error.response)
    });
  }, []);

  function handleNext(event) {
    event.preventDefault();
    result.shift();
    setPosition(position + 1);
  }

  function handleExit() {
    navigate("/");
  }

  return (
    <div className="Landing">
      <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"></link>
      <div className="header">
        <a className="Exit" onClick={handleExit}>
          <AiFillCloseSquare />
        </a>

        <div className="PhotoView">
          {result.slice(0, 1).map(search => (
            <img key={search.id} src={search.src.landscape} alt={search.alt} className="Ref" />
          ))}
          {result.slice(0, 1).map(search => (
            <p key={search.id + 1} className="Credit">📸 This <a key={search.id} className="Source" href={search.src.medium} target='_new'>Photo</a> was taken by <a key={search.id + 2} className="Source" href={search.photographer_url} target='_new'>{search.photographer}</a> on Pexels.</p>
          ))}
        </div>

        <button onClick={(handleNext)} className="Generate">Generate Photo!</button>
      </div>
      <div className="PexelsCredit">
        <a href="https://www.pexels.com" target='_new' className="Source" style={{ color: 'inherit' }}>Photos provided by Pexels.</a>
      </div>
    </div>
  );
}

export default Reference;