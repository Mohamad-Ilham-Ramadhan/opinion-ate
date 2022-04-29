import {useEffect} from 'react';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {loadRestaurants} from '../store/restaurants/actions';

export const RestaurantList = ({loadRestaurants, restaurants}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return (
    <div>
      <div>Restaurants</div>
      <List>
        {restaurants.map(restaurant => (
          <ListItem key={restaurant.id}>
            <ListItemText>{restaurant.name}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
const mapDispatchToProps = {loadRestaurants};
const mapStateToProps = state => ({
  restaurants: state.restaurants.records,
  loadRestaurants: () => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
