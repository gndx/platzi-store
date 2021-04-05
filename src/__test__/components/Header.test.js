import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe("Test group for testing Header", () => {
    test("Render Header", () => {
        const header = shallow(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        );
        expect(header.length).toEqual(1);
    });
    test("Render title", () => {
        const header = mount(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        );
        expect(header.find(".Header-title").text()).toEqual('Platzi Store');
    });
});

describe('Header Snapshot', () => {
    test("Test Header Snapshot", () =>{
        const header = create(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        );
        expect(header.toJSON()).toMatchSnapshot();
    });
});