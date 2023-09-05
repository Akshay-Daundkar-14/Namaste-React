import {FOOD_URL} from '../utils/constants';

const RestraurantCard = (props) => {
    return (
      <div className="res-card">
        <div>
          <img className="food-img" src={FOOD_URL}/>
        </div>
        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>4.4 Starts</h4>
        <h4>38 minutes</h4>
      </div>
    );
  };

  export default RestraurantCard;