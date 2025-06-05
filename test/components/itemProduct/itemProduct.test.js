import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import ItemProduct from '@Components/Item/itemProduct';

const mockItem = {
  title: 'Producto de prueba',
  price: 199.99,
  category: 'Electrónica',
  image: 'https://example.com/product.jpg'
};

const mockFormattedPrice = (price) => `$${price.toFixed(2)}`;
const mockAction = jest.fn();

describe('Prueba del componente TxtInput', () => {
  it('Renderiza el título, precio formateado, categoría e imagen', () => {
    render(
      <ItemProduct
        item={mockItem}
        formattedPrice={mockFormattedPrice}
        action={mockAction}
        index={0}
        isLeftColumn={true}
      />
    );

    expect(screen.getByText(mockItem.category)).toBeTruthy();
    expect(screen.getByText(mockItem.title)).toBeTruthy();
    expect(screen.getByText(mockFormattedPrice(mockItem.price))).toBeTruthy();
  });

  it('Coincide con el snapshot visual', () => {
    const tree = render(
      <ItemProduct
        item={mockItem}
        formattedPrice={mockFormattedPrice}
        action={mockAction}
        index={0}
        isLeftColumn={false}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});