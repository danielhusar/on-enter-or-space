# on-enter-or-space

 > It will cache the callback and return a function that can be used as event handler for react apps. This can be used with `onKeyDown` or `onKeyUp` events.


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
const component = (props) => {
  return <span onClick={props.handleOnClick} onKeyDown={onEnterOrSpace(props.handleOnClick)} />;
};
```

### API

#### callback

Type: `Function`

Default: `undefined`

Required: `true`

Function that is passed into the `onEnterOrSpace` and will get called on key down event. This function will receive event object as first parameter.


## License

MIT © [Daniel Husar](https://github.com/danielhusar)
