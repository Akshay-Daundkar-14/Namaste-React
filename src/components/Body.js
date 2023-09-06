import { useEffect, useState } from "react";
import RestraurantCard from "./RestraurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

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
  };

  const filterTopRestaurant = ()=>{
    const filteredData = listOfRestaurants.filter((res)=>res.info.avgRating >= 4);
    setListOfRestaurants(filteredData);
  }

  return (
    <div className="body">
      <div className="search">
        <button onClick={filterTopRestaurant}>Top Restaurants</button>
      </div>
      <div className="res-container">
        {/* {listOfRestaurants.map((res)=>
          <RestraurantCard resName={res.info.name} key={res.info.id} imageId={res.info.cloudinaryImageId}
          cuisine={res.info.cuisines.join(',')} rating={res.info.avgRating} minutes={res.info.sla.slaString}/>
        )} */}
         {listOfRestaurants.map((res)=>
          <RestraurantCard resData={res.info} key={res.info.id}/>
        )}
      </div>
    </div>
  );
};

export default Body;
