import React from "react";
import { render } from "@testing-library/react";

import Transacao from "./Transacao";

describe("Componente de transação do extrato", () => {
  it("o snapshot deste componente deve permanecer inalterado", () => {
    const { container } = render(
      <Transacao data="15/03/2021" tipo="saque" valor="200.00" />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
