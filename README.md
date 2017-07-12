getIn [![Build Status](https://travis-ci.org/mzvonar/getIn.svg?branch=master)](https://travis-ci.org/mzvonar/getIn) [![Coverage Status](https://coveralls.io/repos/github/mzvonar/getIn/badge.svg?branch=master)](https://coveralls.io/github/mzvonar/getIn?branch=master)
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
 
  gender is `female`

```javascript  
const country = getIn(context, ['user', 'address', 'country']);
 ```
  
  country is `undefined`
  
```javascript  
const verified = getIn(context, ['user', 'profile', 'verified'], false);
```
    
  verified is `false`

## Tests

  `npm test`