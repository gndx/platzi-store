import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('Footer component', () => {
  const footer = mount(<Footer />);
  test('renders Footer component', () => {
    expect(footer.length).toEqual(1);
  });

  test('renders title of Footer component', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('create a default snapshot', () => {
    const footer = create(<Footer />);

    expect(footer.toJSON()).toMatchSnapshot();
  });
});
