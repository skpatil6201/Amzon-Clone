import React, { useEffect, useState } from "react";  // Importing React hooks
import axios from "axios";  // Importing axios for making HTTP requests

function Row(props) {
  // State to store the fetched items
  const [storeItems, UpdateStoreItems] = useState([]);

  // useEffect to fetch data when the component mounts or when fetchUrl changes
  useEffect(() => {
    async function fetchData() {
      // Making a GET request to fetch data from the API using the URL passed via props
      const request = await axios.get(props.fetchUrl);
      UpdateStoreItems(request.data);  // Updating state with fetched data
      return request;
    };
    fetchData();  // Fetching data when the component is mounted or when fetchUrl changes
  }, [props.fetchUrl]);  // Dependency array ensures re-fetching only when fetchUrl changes

  // Function to display each item fetched from the API
  function displayItem(item) {
    return (
      <div className="image row-item" key={item.id}>
        <img src={item.image} alt={item.title} />  {/* Displaying item image */}
      </div>
    );
  }

  return (
    <div>
      {/* Displaying the heading passed via props */}
      <h2 className="heading">{props.heading}</h2>
      {/* Mapping over storeItems and rendering each item */}
      <div className="row flex">{storeItems.map(displayItem)}</div>
    </div>
  );
}

export default Row;
