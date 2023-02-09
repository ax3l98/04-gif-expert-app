import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    'One Punch',
    'Dragon Ball',
    'Naruto',
    'One Piece',
  ]);

  const onAddCategory = () => {
    setCategories([...categories, 'Boku No Hero']);
    // setCategories((cat) => [...cat, 'Boku No Hero']);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory setCategories={setCategories} />

      {/* Listado de Gif */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* Gif Item */}
    </>
  );
};
