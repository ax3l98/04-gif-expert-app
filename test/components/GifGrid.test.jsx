import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'Boku no hero';

  test('should Debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('should Debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Boku no hero',
        url: 'https://localhost/boku-no-hero.jpg',
      },
      {
        id: '123',
        title: 'Naruto',
        url: 'https://localhost/naruto.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
