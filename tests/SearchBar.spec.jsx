// tests/AppSearch.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import AppSearch from "../src/componentes/SearchBar"; // Ajusta la ruta según tu proyecto

describe("AppSearch", () => {
  test("se renderiza correctamente", () => {
    render(<AppSearch onSearch={() => {}} />);
    const input = screen.getByPlaceholderText(/buscar/i);
    expect(input).toBeInTheDocument();
  });

  test("llama a onSearch al escribir en el input", () => {
    const mockOnSearch = vi.fn(); // Vitest usa vi en lugar de jest
    render(<AppSearch onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText(/buscar/i);
    fireEvent.change(input, { target: { value: "guitarra" } });

    expect(mockOnSearch).toHaveBeenCalledTimes(1);
    expect(mockOnSearch).toHaveBeenCalledWith("guitarra");
  });
});
