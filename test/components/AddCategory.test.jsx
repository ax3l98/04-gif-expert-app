import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  test('should Debe de cambiar el valor en la caja de text', () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Boku no hero' } });

    expect(input.value).toBe('Boku no hero');
  });

  test('should Debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Boku no hero';
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe('');

    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test('should No debe de llamar el onNewCategory si el input está vacío', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0); // Funciona igual que la línea de abajo
    expect(onNewCategory).not.toHaveBeenCalled(); // Funciona igual que la línea de arriba, pero con una mejor sintaxis
  });
});
