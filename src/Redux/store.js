import { createStore, } from 'redux';

import reducer from './Burger/reducers';

const store = createStore(reducer);

export default store;