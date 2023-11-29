import { resolve } from 'path';
import {render, screen, fireEvent, waitFor} from "../../test-utils";
import Cita from "./Cita";

describe("Pruebas en App", () => {
	test("Debe verificar que la cita sea del personaje ingresado", async () => {
		render(<Cita />);

		const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
		fireEvent.change(input, {target: {value: "Lisa"}});

		const boton = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(boton);
    
    await waitFor(() => {
      expect(screen.getByText(/Lisa Simpson/i)).toBeInTheDocument()
    });

  });
  
  test('Obtener cita aleatoria', async() => {
    render(<Cita />);

    const boton = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(boton);
    
    // Esperar por un intervalo de tiempo con una promesa
    // await Promise.resolve(setTimeout(resolve, 3000));

    await waitFor(() => {
      expect(screen.getByText(/Homer Simpson/i)).toBeInTheDocument()
    });

    screen.debug();
  
  })
});
