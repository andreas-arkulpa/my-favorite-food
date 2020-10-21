# Workshop Expo / React-Native

Screenshots of the result can be found [here](https://github.com/andreas-arkulpa/my-favorite-food/tree/master/screenshots).

## Step 1 - Project setup

### Requirements:

- NodeJs
- Git
- Visual Studio Code
- Expo CLI: `npm install -g expo-cli`
- Emulator (or Smartphone) with the Expo-Client installed (https://docs.expo.io/get-started/installation/#requirements)

### initialize Project

- create a new empty repo called `my-favorite-food` on GitHub, copy the clone url and clone the project
- `cd my-favorite-food`
- `expo init .` (select the <b>blank</b> template in managed workflow)
- `npm start`

## Step 2 - Config Expo

The app.json ([docs](https://docs.expo.io/versions/v39.0.0/config/app/)) file contains configuration options for your project.<br/>
We need to change the following ones:

- `name` => `my-favorite-food` (the name of your app)
- `slug` => `my-favorite-food` (the friendly URL name for publishing. For example, `my-favorite-food` will refer to the `expo.io/@project-owner/my-favorite-food` project)
- `icon` => `./assets/logo.png` (app icon - [download](https://github.com/andreas-arkulpa/my-favorite-food/blob/master/assets/logo.png))
- `splash.backgroundColor` => `#ff9100` (color to fill the loading screen background)
- `web.favicon` => `./assets/logo.png` (web favicon - [download](https://github.com/andreas-arkulpa/my-favorite-food/blob/master/assets/logo.png))

## Step 3 - Styles

- set the `backgroundColor` from `#fff` to `#ff9100`
- add a new style for the text. set the text `color` to `#fff`

## Step 4 - Status Bar

we want to set the background color of the status bar ([docs](https://docs.expo.io/versions/v39.0.0/sdk/status-bar)) to `#ff9100`:

- install StatusBar package `expo install expo-status-bar`
- import package`import {StatusBar} from 'expo-status-bar'`
- make usage of the StatusBar Component

```jsx
<StatusBar backgroundColor={'#ff9100'} translucent={true} style='light' />
```

- on android the StatusBar is not correct until the expo app has been loaded. We can adjust this in the `app.json` file. add the following:

```javascript
"androidStatusBar": {
    "backgroundColor": "#ff9100",
    "translucent": false,
    "barStyle": "light-content"
}
```

## Components

- create folder `components`

### Text

- create file `Text.js` in the `components` folder
- create a Headline component (use Text from react-native) and assign the following styles `fontSize: 30, color: 'black'`
- create a Paragraph component (use Text from react-native) and assign the following styles `fontSize: 16, color: 'black'`
- keep in mind to handle passed props (props.children = text in this case)
- use both components in App.js

### ImagePreview

- create file `ImagePreview.js` in the `components` folder
- create a ImagePreview component (use Image from react-native) and assign the following styles: `width: '100%', height: 200, resizeMode: 'cover'`
- keep in mind to handle passed `source` prop (use as source in the Image component)
- use component with local [download](https://github.com/andreas-arkulpa/my-favorite-food/blob/master/assets/pizza.jpg) and remote (https://github.com/andreas-arkulpa/my-favorite-food/blob/master/assets/pizza.jpg) sources in App.js

### Button

- create file `Button.js` in the `components` folder
- create a Button component (use TouchableHighlight and Text from react-native) and assign the following styles.
- wrapper:

```
{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ff9100',
    borderRadius: 10,
    padding: 20,
    width: '100%'
}
```

- label:

```
{
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
}
```

## Step 5 - Navigation

<br/>
<br/>
<br/>

wip: notes:

intro
what is expo/rn?
app.json - config basic project (name, slug + publish, logo, )
styles

basic (custom) components
text
image
button (with useState and useEffect)

refactoring
move components in seperate files
function components
es6 arrow functions
seperate styles

navigation
setup
config / screens
routing (with and without passing props)
useFocusEffect

image picker
filesystem permissions
access filesystem
store image reference in state
preview image

text-input
styles
value + onChange

persist data
possible ways to store data (local persistence, only in runtime, async-storage)
how to save, read, delte
parse as json
helper functions to add/remove a item

bonus (plattform differences)
