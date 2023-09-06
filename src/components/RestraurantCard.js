import { FOOD_URL } from "../utils/constants";

const RestraurantCard = (props) => {
  // const { resName, cuisine, rating, minutes, imageId } = props;

  const { name, cuisines, avgRating, cloudinaryImageId } = props.resData;
  const {sla} = props.resData;
  const minutes = sla.slaString;
  
  return (
    // <div className="res-card">
    //   <div>
    //     <img className="food-img" src={FOOD_URL+imageId} />
    //   </div>
    //   <h3>{resName}</h3>
    //     <h4>{cuisine}</h4>
    //     <h4>Rating :{rating}</h4>
    //     <h4>{minutes}</h4>
    // </div>

    <div className="res-card">
      <div>
        <img className="food-img" src={FOOD_URL + cloudinaryImageId} />
      </div>
      <h3>{name}</h3>
      <h4>{cuisines.join(',')}</h4>
      <h4>Rating :{avgRating}</h4>
      <h4>{minutes}</h4>
    </div>
  );
};

export default RestraurantCard;
