import { ENDPOINTS } from "../../support/endpoints.js";
import { obsQueryParams, obsHeaders } from "../../support/APIConfig.js";

describe("Observation by Series API Tests", function () {
  beforeEach(function () {
    cy.fixture("seriesNames").as("conversions");
  });

  it("Positive flow: 10 weeks CAD to USD (200)", function () {
    cy.apiGet(
      ENDPOINTS.OBSERVATIONS + this.conversions.CADtoUSD + ENDPOINTS.FORMAT,
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
      cy.task('logMessage', `\n Average of 10 weeks' CAD to USD rate: ${average.toFixed(4)}`);

      expect(response.status).to.eq(200);
    });
  });
});
