import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');
        const items = await data.json();
        console.log(items.data);
        setItems(items.data);
    }

  return (
    <div>
      <h1>Shop Page</h1>
      { items.map(item => (
          <div>
            <h3 key={item.itemId}>
                <Link to={{ 
                  pathname: `/shop/${item.itemId}`, 
                  query: {
                    title: item.item.name, 
                    image: item.item.images.icon
                  } 
                }}>{item.item.name}</Link>
            </h3>
          </div>
      ))}
    </div>
  );
}

export default Shop;
