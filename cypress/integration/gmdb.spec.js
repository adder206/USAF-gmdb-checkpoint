
// below are the tests for the homepage added at 1122 EST
describe("Home page", () => {
    beforeEach(() => {
      cy.visit('/')

    })

    it('displays the details of a movie when that movie is clicked', () => {
      const viewMovieDetails = cy.get('.movie-title');
      viewMovieDetails.click();

      cy.on('url:changed', (newUrl) => {
        expect(newUrl).toContain('/movie/:id')
      })
    })
})

