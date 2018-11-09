# on-enter-or-space

 > Execute function for enter and space keyboard events. This is usefull if you want to make your app accessible, and you want to add keyboard navigation to the components that have onClick handlers.

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

First time you call `onEnterOrSpace(callback)` it will return another function, that accepts event object. If the event object was enter or space, it will call the `callback` with event object as parameter.

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

Function you want to execute when enter or space event was passed in.

## License

MIT © [Daniel Husar](https://github.com/danielhusar)
