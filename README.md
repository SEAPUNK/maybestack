# maybestack

Returns error stack of an object if it exists.

```javascript

import maybestack from 'maybestack'

var a = {a: 'ok'}
var b = new Error('stuff')

maybestack(a) // {a: 'ok'}
maybestack(b) /*
  Error: stuff
    at Error (native)
*/


```
