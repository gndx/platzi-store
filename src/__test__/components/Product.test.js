import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('renders product component', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );

    expect(product.length).toEqual(1);
  });

  test('checks addToCard button', () => {
    // Un funciona mockeada provista por jest
    const handleAddToCart = jest.fn();
    const product = mount(
      <ProviderMock>
        <Product
          handleAddToCart={handleAddToCart}
          product={ProductMock}
        />
      </ProviderMock>,
    );
    const button = product.find('button');
    button.simulate('click');

    expect(handleAddToCart).toHaveBeenCalledTimes(1);

  });
});
