import 'jsdom-global/register';
import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product/>', () => {
  test('should the Product render', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });
  // This test is for simulate the click
  test('should we simulate the buying button', () => {
    const handleAddToCart = jest.fn(); // This is for create a fake function without passing the real one
    const wrapper = mount(
      <ProviderMock>
        {/* Those are the props that the real component need */}
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    );
    wrapper.find('button').simulate('click'); // We simulate the click
    expect(handleAddToCart).toHaveBeenCalledTimes(1); // For knowing if the button was executed at less one time
  });
});
