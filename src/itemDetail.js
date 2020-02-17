import React, {useState, useEffect} from 'react';
import './App.css';

function ItemDetail(match) {

    useEffect(() => {}, []);

    const [item, setItems] = useState({});
    //console.log(match.location.query.title)

  return (
    <div>
      <h1>Item Details</h1>
      <div>
        <h3>{match.location.query.title}</h3>
        <img src={match.location.query.image} />
      </div>
    </div>
  );
}

export default ItemDetail;
