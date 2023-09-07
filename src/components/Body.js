import { useEffect, useState } from "react";
import RestraurantCard from "./RestraurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfTopRestaurants, setListOfTopRestaurants] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        method: "GET",
      }
    );
    const jsonData = await data.json();
    setListOfRestaurants(
      jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    setListOfTopRestaurants(
      jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const filterTopRestaurant = () => {
    const filteredData = listOfRestaurants.filter(
      (res) => res.info.avgRating >= 4.5
    );
    setListOfTopRestaurants(filteredData);
  };

  const searchRestaurant = () => {
    const filteredData = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(inputText.toLowerCase())
    );
    setListOfTopRestaurants(filteredData);
  };

  if (listOfTopRestaurants.length === 0) {
    return (
      <div className="res-container">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  } else {
    return (
      <div className="body">
        <div className="search-container">
          <input
            type="text"
            className="search"
            placeholder="search restaurant here.."
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button className="btn" onClick={searchRestaurant}>
            SEARCH
          </button>
          <button className="btn" onClick={filterTopRestaurant}>
            Top Restaurants
          </button>
        </div>
        <div className="res-container">
          {listOfTopRestaurants.map((res) => (
            <RestraurantCard resData={res.info} key={res.info.id} />
          ))}
        </div>
      </div>
    );
  }
};

export default Body;
