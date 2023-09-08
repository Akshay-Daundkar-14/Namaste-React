import { useParams } from "react-router-dom";

const RestaurantDetails = () => {
  const { resId } = useParams();

  return (
    <div>
      <h1>Restaurants Details - {resId}</h1>
    </div>
  );
};

export default RestaurantDetails;
