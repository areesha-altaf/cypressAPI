import { ENDPOINTS } from "../../support/endpoints.js";
import { parseString } from "xml2js";

describe("User API Tests", function () {

  before(function () {
    cy.fixture("seriesNames").as("conversions");
  });

  it("Convert USD to CAD", function () {
    cy.apiGet(ENDPOINTS.EXCHANGE_RATES + this.conversions.USDtoCAD).then((response) => {
      expect(response.status).to.eq(200);

      cy.task("logMessage", `API Response (XML): \n${response.body}`); //print xml response on console

      cy.wrap(response.body).then((xmlResponse) => {
        parseString(response.body, { explicitArray: false }, (err, result) => { //print converted json response
          if (err) { //error handling in case of parsing error
            console.error("XML Parsing Error:", err);
            return;
          }
          cy.task("logMessage", `Parsed JSON Response: ${JSON.stringify(result, null, 2)}`);

          //aassertions
          expect(result["rdf:RDF"].item.description).to.include("US dollar to Canadian dollar daily exchange rate");
          expect(result["rdf:RDF"].item["cb:statistics"]["cb:exchangeRate"]["cb:baseCurrency"]).to.eq("CAD");
          expect(result["rdf:RDF"].item["cb:statistics"]["cb:exchangeRate"]["cb:targetCurrency"]).to.eq("USD");
          expect(result["rdf:RDF"].item["cb:statistics"]["cb:exchangeRate"]["cb:observationPeriod"]["$"].frequency).to.eq("daily");

        });
      });

    });
  });

});