import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('Header', () => {
  const header = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>,
  );

  test('Should render component', () => {
    expect(header.length).toEqual(1);
  });

  test('Should render title', () => {
    const props = {
      cart: [{
        id: 'idProduct',
      }],
    };
    const header = mount(
      <ProviderMock>
        <Header props={props} />
      </ProviderMock>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header Snapshot', () => {
  test('Should match component UI snapshot', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
