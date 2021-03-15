import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import App, { calcularNovoSaldo } from "./App";

describe("Componente principal", () => {
  describe("Quando eu abro o App do banco", () => {
    it("Deve mostrar o nome do banco na tela principal", () => {
      render(<App />);

      expect(screen.getByText("ByteBank")).toBeInTheDocument();
    });

    it("Deve mostrar o saldo da conta ao se acessar o App", () => {
      render(<App />);

      expect(screen.getByText("Saldo:")).toBeInTheDocument();
    });

    it("Deve mostrar o botão de realizar transação", () => {
      render(<App />);

      expect(screen.getByText("Realizar operação")).toBeInTheDocument();
    });
  });

  describe("Quando eu realizo uma transação", () => {
    it("que é um saque, o valor do saldo vai reduzir", () => {
      const valores = {
        transacao: "saque",
        valor: 100,
      };
      const novoSaldo = calcularNovoSaldo(valores, 200);

      expect(novoSaldo).toBe(100);
    });

    it("que é um saque, a transação deve ser realizada", () => {
      const { getByText, getByTestId, getByLabelText } = render(<App />);

      const saldo = getByText("R$ 1000");
      const transacao = getByLabelText("Saque");
      const valor = getByTestId("valor");
      const botaoTransacao = getByText("Realizar operação");

      fireEvent.click(transacao, { target: { value: "saque" } });
      fireEvent.change(valor, { target: { value: 10 } });
      fireEvent.click(botaoTransacao);

      expect(saldo.textContent).toBe("R$ 990");
    });
  });
});
