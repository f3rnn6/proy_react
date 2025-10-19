import { render, screen, fireEvent, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppNavBar from "../src/componentes/navbar";

describe("AppNavBar", () => {
  test("abre el Offcanvas al hacer clic en Catalogo", () => {
    render(
      <MemoryRouter>
        <AppNavBar nombre="Admin" />
      </MemoryRouter>
    );

    const btnCatalogo = screen.getByRole("button", { name: /Catalogo/i });
    fireEvent.click(btnCatalogo);

    // Limitamos la búsqueda al Offcanvas
    const offcanvas = screen.getByRole("dialog"); // Offcanvas tiene rol dialog
    expect(within(offcanvas).getByText(/Melody Store/i)).toBeInTheDocument();
    expect(within(offcanvas).getByText(/Baterias/i)).toBeInTheDocument();
    expect(within(offcanvas).getByText(/Guitarras/i)).toBeInTheDocument();
    expect(within(offcanvas).getByText(/Teclados/i)).toBeInTheDocument();
    expect(within(offcanvas).getByText(/Accesorios/i)).toBeInTheDocument();
  });
});
