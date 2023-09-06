import { useEffect, useState } from "react";
import RestraurantCard from "./RestraurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("fetch data called");

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        method: "GET",
      }
    );

    const jsonData = await data.json();

    console.log(
      "DATA ",
      jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    console.log(
      "DATA ",
      jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants[0]
        .info
    );
    setListOfRestaurants(
      jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* {listOfRestaurants.map((res)=>
          <RestraurantCard resName={res.info.name} key={res.info.id} imageId={res.info.cloudinaryImageId}
          cuisine={res.info.cuisines.join(',')} rating={res.info.avgRating} minutes={res.info.sla.slaString}/>
        )} */}
         {listOfRestaurants.map((res)=>
          <RestraurantCard resData={res.info}/>
        )}
      </div>
    </div>
  );
};

export default Body;
