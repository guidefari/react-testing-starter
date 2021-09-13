import { render, screen } from "@testing-library/react";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on initial render, the pay button is disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "3" }} />);

  // screen.debug();
  // screen.getAllByRole("");

  // TODO: difference between getByRole & findByRole
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});
