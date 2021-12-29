import { configure } from 'enzyme'
import Adapater from 'enzyme-adapter-react-16'

configure({ adapter: new Adapater() })

/**
 * Agregaremos la configuración necesaria para poder trabajar
 * con el mock de api
 * 
 * Esto nos permitira capturar las peticiones hechas dentro de las pruebas
 * y utilizar el mocked fetch en lugar del fetch que normalment se usa
 * en el navegador
 */
global.fetch = require('jest-fetch-mock')