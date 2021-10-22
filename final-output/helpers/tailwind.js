import {create} from 'tailwind-react-native-classnames';

import styles from '../tw-rn-styles.json'; // <-- your path may differ

// this function works just like the default package export
// except it is customized according to your `tailwind.config.js`
const tailwind = create(styles).style;

export default tailwind;
