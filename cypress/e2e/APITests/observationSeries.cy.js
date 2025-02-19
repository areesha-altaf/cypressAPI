import { ENDPOINTS } from "../../support/endpoints.js";
import { obsQueryParams, obsHeaders, incorrectParams } from "../../support/APIConfig.js";

describe("Observation by Series API Tests", function () {
  beforeEach(function () {
    cy.fixture("seriesNames").as("conversions");
  });

  it("Positive flow: 10 weeks CAD to USD (200)", function () {
   
    cy.apiGet(
      ENDPOINTS.OBSERVATIONS + this.conversions.CADtoUSD + ENDPOINTS.FORMAT, // CADtoUSD can be replaced by any other series 
      obsQueryParams,
      obsHeaders
    ).then((response) => {
      cy.task('logMessage', `API Response Body: ${JSON.stringify(response.body, null, 2)}`);

      const observations = response.body.observations;
      let sum = 0;
      let count = 0;

      for (let i = 0; i < observations.length; i++) {
        const vValue = parseFloat(observations[i].FXCADUSD.v);
        sum += vValue; 
        count++; 
      }

      const average = sum / count;
      cy.task('logMessage', `\n Average of 10 weeks' conversion rate: ${average.toFixed(4)}`); //4 decimal places

      expect(response.status).to.eq(200);

    });
  });

  it("Negative flow: Series doesn't exist (404)", function () {
    cy.apiGet(
      ENDPOINTS.OBSERVATIONS + this.conversions.incorrectSeries + ENDPOINTS.FORMAT,  
      obsQueryParams,
      obsHeaders,
      false //false so that it doesn't fail the test
    ).then((response) => {
      cy.task('logMessage', `API Response Body: ${JSON.stringify(response.body, null, 2)}`);

      expect(response.status).to.eq(404);
      expect(response.body.message).to.include("Series " + this.conversions.incorrectSeries + " not found");

    });
  })

  it("Negative flow: Incorrect request (400)", function () {
    cy.apiGet(
      ENDPOINTS.OBSERVATIONS + this.conversions.CADtoUSD + ENDPOINTS.FORMAT,  
      incorrectParams,
      obsHeaders,
      false //false so that it doesn't fail the test
    ).then((response) => {
      cy.task('logMessage', `API Response Body: ${JSON.stringify(response.body, null, 2)}`);

      expect(response.status).to.eq(400)
      expect(response.body.message).to.include("Bad recent observations request parameters, you can not mix start_date or end_date with any of recent, recent_weeks, recent_months, recent_years");

    });
  })

});
