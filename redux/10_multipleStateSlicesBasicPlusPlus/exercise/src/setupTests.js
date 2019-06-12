// setup file, read magically by react-scripts

import '../../../../testHelpers/debuggers'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

global.lets = require('bdd-lazy-var/getter').get
