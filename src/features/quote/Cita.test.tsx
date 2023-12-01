import { resolve } from 'path';
import { render, screen, fireEvent, waitFor } from "../../test-utils";
import Cita from "./Cita";

describe("CitaTestSuite", () => {

  beforeEach(() => {
    render(
      <Cita />
    );
  });

  test('no debería mostrar ninguna cita', () => {
    const noQuoteMessage = screen.queryByText('No se encontro ninguna cita');
    expect(noQuoteMessage).toBeInTheDocument();
  });
 
  test("Debe verificar que la cita sea de Moe", async () => {
    const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
    fireEvent.change(input, { target: { value: "Moe" } });   
    const boton = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(boton);
    await waitFor(() => {
      expect(screen.getByText(/Moe/i)).toBeInTheDocument()
    });   
  });

  test('Obtener cita aleatoria', async () => {
    const boton = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(boton);
    await waitFor(() => {
      expect(screen.getByText(/Homer Simpson/i)).toBeInTheDocument()
    });
  })
  test('debería mostrar CARGANDO...', async () => {
    const botonCitaAleatoria = screen.getByText(/Obtener cita aleatoria/i);
    fireEvent.click(botonCitaAleatoria);
    const loadingMessage = screen.getByText('CARGANDO...');
    await waitFor(() => {
      expect(loadingMessage).toBeInTheDocument()
    });
  });
  test('debería mostrar cita', async () => {
    const botonCitaAleatoria = screen.getByText(/Obtener cita aleatoria/i);
    fireEvent.click(botonCitaAleatoria);
    const cita = await screen.findByText(/Marriage is like a coffin and each kid is another nail/i);
    await waitFor(() => {
      expect(cita).toBeInTheDocument()
    });
  });

  test('debería mostrar mensaje de error con input numérico', async () => {
    const inputField = screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
    fireEvent.change(inputField, { target: { value: '5' } });
    const botonCita = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(botonCita);
    const invalidMessage = await screen.findByText(/Por favor ingrese un nombre válido/i);
    await waitFor(() => expect(invalidMessage).toBeInTheDocument());
  });
});
