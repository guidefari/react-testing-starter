describe("payment", () => {
  it("user can make payment", () => {
    // login
    cy.visit("/");
    cy.findByRole("textbox", { name: /username/i }).type("dude@example.com");
    cy.findByLabelText(/password/i).type("dude");
    cy.findByRole("checkbox", { name: /remember me/i }).check();
    cy.findByRole("button", { name: /sign in/i }).click();
    // check account balance
    let oldBalance;
    cy.get("[data-test=sidenav-user-balance]").then(($balance) => (oldBalance = $balance.text()));
    // click on new button
    cy.findByRole("button", { name: /new/i }).click();
    // search for user
    cy.findByRole("textbox").type("devon becker");
    cy.findByText(/devon becker/i).click();
    // add amount & note & click pay
    cy.findByPlaceholderText(/amount/i).type("50");
    cy.findByPlaceholderText(/add a note/i).type("dinner");
    cy.findByRole("button", { name: /pay/i }).click();
    // return to transactions
    cy.findByRole("button", { name: /return to transactions/i }).click();
    // go to personal payments
    cy.findByRole("tab", { name: /mine/i }).click();
    // click on payment
    // verify if payment was made
    // verify if payment amount was deducted
  });
});
