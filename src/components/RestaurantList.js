import {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadRestaurants} from '../store/restaurants/actions';

export const RestaurantList = ({loadRestaurants, restaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return (
    <div>
      <div>Restaurants</div>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
};
const mapDispatchToProps = {loadRestaurants};
const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
  loadRestaurants: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
