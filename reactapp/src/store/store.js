import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';

import resin from './resin';
import compare from './compare';

const store = createStoreon([
  resin,
  compare,
  process.env.NODE_ENV !== 'production' && storeonDevtools,
])
export default store
