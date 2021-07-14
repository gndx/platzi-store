import 'jsdom-global/register';

import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
  const footer = mount(<Footer />);
  test('should the Footer render', () => {
    expect(footer.length).toEqual(1); // If the Footer is mounted return something
  });
  test('should the Footer title render', () => {
    // Find this class inside the component
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
