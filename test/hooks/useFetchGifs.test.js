import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hook de useFetchGifs', () => {
  test('should Debe de regresar el estado inicial', () => {
    // const { images, isLoading} = useFetchGifs(); // No funciona, usar la alternativa de la línea siguiente
    const { result } = renderHook(() => useFetchGifs('Boku No Hero'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should Debe de retornar un arreglo de imagenes y el isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('Boku No Hero'));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
