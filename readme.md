# on-enter-or-space

 > Execute function when enter or space keyboard event is pressed.


## Install

Using npm
```sh
npm install @daniel.husar/on-enter-or-space
```

Using yarn
```sh
yarn add @daniel.husar/on-enter-or-space
```

## Usage with react

```jsx
import onEnterOrSpace from '@daniel.husar/on-enter-or-space';
const component = (props) => <span onClick={props.handleOnClick} onKeyDown={onEnterOrSpace(props.handleOnClick)} />
```

### API

#### callback

Type: `Function`

Default: `undefined`

Required: `true`

Function that is passed into the `onEnterOrSpace` and will get called on key down event. This function will receive event object as first parameter.


## License

MIT © [Daniel Husar](https://github.com/danielhusar)
