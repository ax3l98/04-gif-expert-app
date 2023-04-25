import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem>', () => {
  const title = 'Naruto';
  const url = 'https://naruto-shippuden.com/naruto.jpg';

  test('should Debe de hacer match con el snapshot', () => {
    /* Tarea
      1. Añadir PropTypes ????? yarn add
        a. title obligatorio
        b. url obligatorio

      2. Evaluar el snapshot
    */

    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('should Debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug(); // Mostrar al 'sujeto de pruebas' en consola

    // expect(screen.getByRole('img').src).toBe(url); // Versión para componentes pequeños, aunque no se recomienda mucho su uso
    // expect(screen.getByRole('img').alt).toBe(title); // Versión para componentes pequeños, aunque no se recomienda mucho su uso

    const { src, alt } = screen.getByRole('img'); // Mejor utilizar esta manera
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('should Debe de mostrar el título en el componente', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
