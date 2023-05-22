import { ObjectsRegistry } from "../../../../support/Objects/Registry";

const apiPage = ObjectsRegistry.ApiPage,
  aghelper = ObjectsRegistry.AggregateHelper;

describe("Validate API Auto generated headers", () => {
  it("1. Check whether auto generated header is set and overidden", () => {
    apiPage.CreateApi("FirstAPI");
    apiPage.SelectPaneTab("Body");
    apiPage.SelectSubTab("FORM_URLENCODED");
    apiPage.ValidateImportedHeaderParams(true, {
      key: "content-type",
      value: "application/x-www-form-urlencoded",
    });
    apiPage.EnterHeader("content-type", "application/json");
    apiPage.ValidateImportedKeyValueOverride(0);
    apiPage.EnterHeader("", "");
    apiPage.ValidateImportedKeyValueOverride(0, false);
    aghelper.AssertElementVisible(
      apiPage._autoGeneratedHeaderInfoIcon("content-type"),
    );
    cy.get(apiPage._autoGeneratedHeaderInfoIcon("content-type")).realHover({
      pointer: "mouse",
    });

    aghelper.AssertContains(
      "This content-type header is auto-generated by appsmith based on body type of the API. Create a new header content-type to overwrite this value.",
      "be.visible",
    );
  });
});