import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer/>', () => {
  test('should the Footer render', () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1); // If the Footer is mounted return something
  });
});
