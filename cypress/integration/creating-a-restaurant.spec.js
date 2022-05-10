describe('Creating a restaurant', () => {
  it('allows adding restaurants', () => {
    const restaurantId = 27;
    const restaurantName = 'Mie Ayam Placee';

    cy.intercept(
      'GET',
      'https://outside-in-dev-api.herokuapp.com/bFD1cIl2hDZiqYtVw74HoYtRWogFgdDq/restaurants',
      [],
    );

    cy.intercept(
      {
        method: 'POST',
        url: 'https://outside-in-dev-api.herokuapp.com/bFD1cIl2hDZiqYtVw74HoYtRWogFgdDq/restaurants',
      },
      {
        id: restaurantId,
        name: restaurantName,
      },
    ).as('addRestaurant');

    cy.visit('/');

    cy.get('[placeholder="Add Restaurant"]').type(restaurantName);
    cy.contains('Add').click();

    // cy.wait('@addRestaurant').then(interception => {
    //   const body = interception.response.body;
    //   console.log('response body:', body);
    //   expect({name: restaurantName}).to.deep.equal(body);
    // });
    cy.wait('@addRestaurant').its('request.body').should('deep.equal', {
      name: restaurantName,
    });

    cy.contains(restaurantName);
  });
});
