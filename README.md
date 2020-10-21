# Test con Jest y Enzyme en React

Para ello vamos a usar el proyecto de [platzy-store](https://github.com/gndx/platzi-store) como base

## Instalación

```npm install jest enzyme enzyme-adapter-react-16 --save-dev```

## Configuración

Configuramos los scripts:

```json
  "scripts": {
    "build": "webpack --mode production",
    "format": "prettier --write '{*.js,src/**/*.{js,jsx}}'",
    "lint": "eslint src/",
    "start": "webpack-dev-server --open --mode development",
    "test": "jest",
    "test:watch": "jest --watch"
  },
```

Y configuramos el adaptador de enzyme para React

```js
// src/__test__/setupTest.js

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

```

Y en el package json añadimos una configuración para que interprete bien este archivo

```json
  // ...
  "bugs": {
    "url": ""
  },
  "homepage": "",
  "jest": {
    "setupFilesAfterEnv": [
      "<rootDir>/src/__test__/setupTest.js"
    ]
  }
```

Si queremos trabajar con los módulos de ES6 podemos cambiar el archivo de babel _.babelrc_ 

```js
// .babelrc

{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "babel-plugin-transform-class-properties"
  ]
}
```

Por su versión de javascript _babel.config.js_

```js
// babel.config.js

module.exports = {
  'presets': [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  'plugins': [
    'babel-plugin-transform-class-properties',
  ],
};
```

## Mockeando partes para los test

Partiendo de este test:

```js
// src/__test__/components/Footer.test.js

import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Footer', () => {
  test('Render Footer component', () => {
    const footer = mount(<Footer />);
    expect(footer.length).toEqual(1);
  });
});
```

Nos damos cuenta de que hay partes del componente que no reconoce, en concreto, los estilos, ya que no son de react, con lo cual, tenemos que mockearlo

Para ellos podemos crear una carpera de mocks e ir introduciendo allí nuestros mocks, vamos a crear por ejemplo el mock de **style**:

```js
// src/__mocks__/styleMock.js

module.exports = {};

// o con es6

export default {};

```

Y configuramos jest para que acepte esos mocks:

```json
// package.json

  "jest": {
    "setupFilesAfterEnv": [
      "<rootDir>/src/__test__/setupTest.js"
    ],
    "moduleNameMapper": {
      "\\.(styl|css)$": "<rootDir>/src/__mocks__/styleMock.js"
    }
  }
```

Otro mock muy útil es el de **Redux y Router**

```js
// src/__mocks__/ProviderMock.js

import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import initialState from '../initialState';
import reducer from '../reducers';

const store = createStore(reducer, initialState);
const history = createBrowserHistory();

const ProviderMock = props => (
  <Provider store={store}>
    <Router history={history}>
      {props.children}
    </Router>
  </Provider>
);

export default ProviderMock;

```

Y lo implemetaríamos así:

```js
// src/__test__/components/Header.test.js

import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('Header', () => {
  test('renders Header component', () => {
    // el shallow lo usamos cuando necesitamos el elemento, pero no el dom del componente
    const header = shallow(
      // envolvemos nuestro componente con el mock
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });

  test('renders title of Header component', () => {
    // el mount lo usamos cuando necesitamos acceder a elementos del dom
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

```

### ¿Cuándo utilizar mount y cuándo utilizar shallow?

mount --> Cuando necesitas el DOM
shallow --> Solo necesitas algo particular del componente. No ocupas todo el DOM

## Simular eventos

Vamos a ver otro ejemplo en el que comprobamos un evento click y mockeamos las props pasadas al componente Product:

```js
// src/__test__/components/Product.test.js

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

```

## Snapshots

Instalamos la librería que nos permite hacer snapshots:

```npm install react-test-renderer --save-dev```

Creamos una snapshot en nuestro test de Footer:

```js
// src/__test__/components/Footer.test.js
import { create } from 'react-test-renderer';
// ...
describe('Footer Snapshot', () => {
  test('create a default snapshot', () => {
    const footer = create(<Footer />);

    expect(footer.toJSON()).toMatchSnapshot();
  });
});
```

O si es un componente que necesita el provider:

```js
// src/__test__/components/Header.test.js
import { create } from 'react-test-renderer';
// ...

describe('Header Snapshot', () => {
  test('create a default snapshot', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );

    expect(header.toJSON()).toMatchSnapshot();
  });
});

```

### Actualizar snapshots:

```bash
jest --updateSnapshot
```

### Eliminar snapshot no usados:

```bash
npm test -- -u
```

## Testear Actions

Podemos crear una carpeta en la de test que se llame _actions_

```js
// src/__test__/actions/actions.test.js

import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  test('addToCard action', () => {
    const payload = ProductMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });
});
```

## Testear Reducers

De igual manera creamos la carpeta _reducers_

```js
// src/__test__/actions/reducers.test.js

import reducers from '../../reducers';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducer', () => {
  test('returns initial state', () => {
    const payload = ProductMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(reducers({}, '')).toEqual({});
  });

  test('returns state with the product added', () => {
    const initialState = {
      cart: [],
    };
    const payload = ProductMock;
    const action = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(reducers(initialState, action)).toEqual({
      cart: [ProductMock],
    });
  });

  test('returns state with the product removed', () => {
    const initialState = {
      cart: [ProductMock],
    };
    const payload = ProductMock.id;
    const action = {
      type: 'REMOVE_FROM_CART',
      payload: {
        id: payload,
      },
    };
    expect(reducers(initialState, action)).toEqual({
      cart: [],
    });
  });
});

```

## Configuración de jest

Podemos configurar jest en un archivo aparte para que esté más localizado y separado del resto del package, además podemos añadir ahí configuraciones adicionales como que incluya el coverage

```js
// jest.config.js

module.exports = {
  verbose: true,
  collectCoverage: true,
  setupFilesAfterEnv: ['<rootDir>/src/__test__/setupTest.js'],
  moduleNameMapper: {
    '\\.(styl|css)$': '<rootDir>/src/__mocks__/styleMock.js',
  },
};
```

