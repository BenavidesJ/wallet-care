import { useEffect, useState } from 'react';
import { Product } from './components';
import './App.css';

function App() {
  const [listOfProducts, setListOfProducts] = useState<any[]>([]);

  const onAddProduct = (product: any) => {
    setListOfProducts([...listOfProducts, product]);
  };

  useEffect(() => {
    console.log(listOfProducts);
  }, [listOfProducts]);

  return (
    <div className="layout">
      <h1>Initial Work!!</h1>
      <ul>
        <li>
          <Product onAdd={onAddProduct} name="Pan" />
        </li>
        <li>
          <Product onAdd={onAddProduct} name="Leche" />
        </li>
      </ul>
    </div>
  );
}

export default App;
