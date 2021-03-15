import React from "react";
import { render, screen } from "@testing-library/react";

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
  });
});
