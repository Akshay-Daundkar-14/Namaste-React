import RestraurantCard from "./RestraurantCard";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
        <RestraurantCard resName="Akshay Food" cuisine="Biryani, North Indian, Asian"/>
        <RestraurantCard resName="Akx Food" cuisine="American"/>
        </div>
      </div>
    );
  };


  export default Body;