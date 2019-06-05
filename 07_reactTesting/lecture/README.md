
Enzyme docs: [shallow](https://airbnb.io/enzyme/docs/api/ShallowWrapper) and [mount](https://airbnb.io/enzyme/docs/api/mount.html).

Installation:

`$ yarn add --dev enzyme enzyme-adapter-react-16`

```js
// inside of `setupTests.js`
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
```
