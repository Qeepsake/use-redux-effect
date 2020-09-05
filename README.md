# use-redux-effect
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.lukebrandonfarrell.com"><img src="https://avatars3.githubusercontent.com/u/18139277?v=4" width="100px;" alt=""/><br /><sub><b>Luke Brandon Farrell</b></sub></a><br /><a href="#projectManagement-lukebrandonfarrell" title="Project Management">📆</a> <a href="https://github.com/aspect-apps/use-redux-effect/commits?author=lukebrandonfarrell" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!