# maybestack

Returns error stack of an object if it exists.

```javascript

import maybestack from 'maybestack'

const a = {a: 'ok'}
const b = new Error('stuff')

maybestack(a) // {a: 'ok'}
maybestack(b) /*
  Error: stuff
    at Error (native)
*/


```
