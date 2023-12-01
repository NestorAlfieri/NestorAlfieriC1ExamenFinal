import { render, screen, fireEvent, waitFor } from "../../test-utils";
import Bio from "./Bio";

describe("Bio test", () => {
  test("Debería mostrar Bio Bart", () => {
    render(<Bio />);
    const bioBart =
      "A los diez años, Bart es el hijo mayor y único varón de Homero y Marge, y el hermano de Lisa y Maggie. Los rasgos de carácter más prominentes y populares de Bart son su picardía, rebeldía y falta de respeto a la autoridad.";
    expect(screen.queryByText(bioBart)).toBeInTheDocument();
  });  
  
  test("Debería mostrar Bio Lisa", async () => {
    render(<Bio />);
    const botonLisa = screen.getByRole("button", { name: /LISA/i });
    fireEvent.click(botonLisa);    
    const bioLisa =
      "Lisa es vegetariana, una fuerte ecologista, feminista y budista. El personaje de Lisa se transforma muchas veces a lo largo del programa: se convierte en vegetariana en la temporada 7 y se convierte al budismo en la temporada 13. Fuerte liberal y activista por la paz, la igualdad y el medio ambiente, Lisa aboga por una variedad de causas políticas que generalmente la ponen contra la mayoría de la gente en Springfield.";
    await waitFor(() => {
      expect(screen.getByText(bioLisa)).toBeInTheDocument();
    });
  });
  
  test("Debería mostrar Bio Marge", async () => {
    render(<Bio />);
    const botonMarge = screen.getByRole("button", { name: /MARGE/i });
    fireEvent.click(botonMarge);    
    const bioMarge =
      'Marge es la madre de la familia Simpson. Con su marido Homero, tiene tres niños: Bart, Lisa y Maggie. Marge es la fuerza moralista en su familia y a menudo emplea una voz firme en medio de las travesuras de su familia, tratando de mantener el orden en la casa Simpson. A menudo se la representa como la típica madre de televisión y a menudo se incluye en las listas de las mejores "mamá de televisión".';
    await waitFor(() => {
      expect(screen.getByText(bioMarge)).toBeInTheDocument();
    });
  });
})
