import { mount } from 'enzyme';
import React from 'react';
import Footer from '../../components/Footer';
import { create } from 'react-test-renderer';

describe('Test group for testing Footer', () => {
    const footer = mount(<Footer/>);
    test('Render Footer', () => {
        expect(footer.length).toEqual(1);
    });
    test('Title Render', () => {
        expect(footer.find(".Footer-title").text()).toEqual("Platzi Store");
    })
});

describe('Footer Snapshot', () => {
    test('Validate Footer in UI', () => {
        const footer = create(<Footer/>);
        expect(footer.toJSON()).toMatchSnapshot();
    });
});