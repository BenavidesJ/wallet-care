import React, { useEffect, useRef, useState } from 'react';

const INITIAL_STATE = {
  brand: '',
  quantity: '',
  unitprice: '',
};

interface ProductProps {
  name: string;
  onAdd: (product: any) => void;
}

export const Product = ({ onAdd, name }: ProductProps) => {
  const [product, setProduct] = useState<typeof INITIAL_STATE>(INITIAL_STATE);
  const [total, setTotal] = useState<number>(0);
  const [selected, setSelected] = useState<boolean>(false);
  const brandInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);
  const priceInputRef = useRef<HTMLInputElement>(null);

  const clearInputs = () => {
    if (
      brandInputRef.current !== null ||
      quantityInputRef.current !== null ||
      priceInputRef.current !== null
    ) {
      //@ts-ignore
      brandInputRef.current.value = '';
      //@ts-ignore
      quantityInputRef.current.value = '';
      //@ts-ignore
      priceInputRef.current.value = '';
    }
  };
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value, name } = e.target as HTMLInputElement;
    setProduct({ ...product, [name]: value });
  };

  const onClick = () => {
    clearInputs();
    setSelected(!selected);
    onAdd(product);
  };

  useEffect(() => {
    const { unitprice, quantity } = product;
    const totalCalulation = Number(unitprice) * Number(quantity);
    setTotal(totalCalulation);
  }, [product]);

  return (
    <div>
      {/* Producto */}
      <div>
        <h3>{name}</h3>
        <input
          ref={brandInputRef}
          type="text"
          name="brand"
          placeholder="Ingrese marca"
          onChange={(e) => onChange(e)}
        />
      </div>
      {/* Cantidad */}
      <div>
        <span>Cantidad</span>
        <input
          ref={quantityInputRef}
          type="text"
          name="quantity"
          placeholder="Ingrese cantidad"
          onChange={onChange}
        />
      </div>
      {/* Cantidad */}
      <div>
        <span>Precio</span>
        <input
          ref={priceInputRef}
          type="text"
          name="unitprice"
          placeholder="Ingrese precio unitario"
          onChange={onChange}
        />
      </div>
      {/* Acciones */}
      <div>
        <button onClick={onClick} disabled={selected}>
          Seleccionar
        </button>
      </div>
      {/* Total */}
      <div>
        <span>{total}</span>
      </div>
    </div>
  );
};
