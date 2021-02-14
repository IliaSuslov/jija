import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';

import resin from './resin';

const store = createStoreon([
  resin,
  process.env.NODE_ENV !== 'production' && storeonDevtools,
])
export default store
