# use-redux-effect

> A powerful React hook that subscribes to Redux store events

[![NPM](https://img.shields.io/npm/v/use-redux-effect.svg)](https://www.npmjs.com/package/use-redux-effect) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-redux-effect
```

## Usage
First, add the hook and set it up to execute the desired logic
```jsx
import {Text} from 'react-native'
import { useReduxEffect } from 'use-redux-effect'

const ExampleClass = (props) => {

    useReduxEffect((exampleEffect) => {
      // Execute code
    }, eventType, [props]);


    return <Text>This is an example Component</Text>

}
```
Next, add the reducer that recieves the action to your Redux store :

```jsx
import {actionReducer} from 'use-redux-effect'

const reducers = {
  action : actionReducer
}

// Proceed to add into the Redux store of your application
```

## License

MIT © [lukebrandonfarrell](https://github.com/lukebrandonfarrell)
