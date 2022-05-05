import {render, screen} from '@testing-library/react';
import {scryRenderedComponentsWithType} from 'react-dom/test-utils';
import {RestaurantList} from '../RestaurantList'; // Be sure to use the named import import {RestaurantList} with curly braces, not the default import import RestaurantList. The named import will continue to be the component that is not connected to Redux, which is the one we want to unit test. If you use the default import, then once we connect it to Redux your unit test will begin failing.
describe('RestaurantList', () => {
  const restaurants = [
    {id: 1, name: 'Sushi Place'},
    {id: 2, name: 'Pizza Place'},
  ];
  let loadRestaurants;

  const renderWithProps = (propOverrides = {}) => {
    const props = {
      loadRestaurants: jest.fn().mockName('loadRestaurants'),
      loading: false,
      restaurants,
      ...propOverrides,
    };
    loadRestaurants = props.loadRestaurants;
    render(<RestaurantList {...props} />);
  };

  it('loads restaurants on first render', () => {
    renderWithProps();
    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('displays the loading indicator while loading', () => {
    renderWithProps({loading: true});
    expect(screen.queryByTestId('loading-indicator')).not.toBeNull();
  });

  describe('when loading fails', () => {
    it('displays the error message', () => {
      renderWithProps({loadError: true});
      expect(
        screen.getByText('Restaurants could not be loaded.'),
      ).toBeInTheDocument();
    });
  });

  describe('When loading succeeds', () => {
    it('does not display the loading indicator while not loading', () => {
      expect(screen.queryByTestId('loading-indicator')).toBeNull();
    });
    it('does not display the error message', () => {
      renderWithProps();
      expect(
        screen.queryByText('Restaurants could not be loaded.'),
      ).not.toBeInTheDocument();
    });
    it('display the restaurants', () => {
      renderWithProps();
      expect(screen.queryByText('Sushi Place')).not.toBeNull();
      expect(screen.queryByText('Pizza Place')).not.toBeNull();
    });
  });
});
