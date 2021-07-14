// This is for setup the test files
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//! Configuration for the mock of Fetch
global.fetch = require('jest-fetch-mock');
