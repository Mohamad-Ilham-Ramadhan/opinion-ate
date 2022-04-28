import {render} from '@testing-library/react';
import {RestaurantList} from '../RestaurantList'; // Be sure to use the named import import {RestaurantList} with curly braces, not the default import import RestaurantList. The named import will continue to be the component that is not connected to Redux, which is the one we want to unit test. If you use the default import, then once we connect it to Redux your unit test will begin failing.
console.log('The component: ', RestaurantList);
describe('RestaurantList', () => {
  it('loads restaurants on first render', () => {
    const loadRestaurants = jest.fn().mockName('loadRestaurants'); // .mockName() to give our mock function a name to make our error messages more readable.

    render(<RestaurantList loadRestaurants={loadRestaurants} />);

    expect(loadRestaurants).toHaveBeenCalled();
  });
});
