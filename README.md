getIn
=========

Get value from object by path. Path can be string or array (e.g. ['user', 'profile', 'gender']).  
If any value in path is undefined then undefined is returned or defaultValue if provided.

## Installation

  `npm install @mzvonar/getin`

## Usage

```javascript
const getIn = require('@mzvonar/getin');
  
const context = {
    user: {
        profile: {
            gender: 'female'
        }
    }
}
  
const gender = getIn(context, ['user', 'profile', 'gender']);
 ```
  
  Output should be `female`


## Tests

  `npm test`