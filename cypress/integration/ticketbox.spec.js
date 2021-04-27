describe('Ticketbox', () => {
    beforeEach(() => cy.visit('index.html'));
    //First Test
    it('Checks for the initial state', () => {
      cy.percySnapshot();
    });
  });