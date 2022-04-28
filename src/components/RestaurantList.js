import {useEffect} from 'react';

export const RestaurantList = ({loadRestaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return <div>Restaurants</div>;
};
export default RestaurantList;
