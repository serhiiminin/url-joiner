# URL-JOINER

*Handy utils for merging and parsing url*

## Installation

~~~
npm i url-joiner --save
~~~

_or_

~~~
yarn add url-joiner
~~~

## Usage

This package provides 3 functions that can be used for different purposes

1. __`parseSearchParams`__ accepts search query string 
* search | string _('name=ken&surname=flatton')_
  
__Example__
```javascript
parseSearchParams('name=ken&surname=flatton')

// => 
// {
//  name: 'ken',
//  surname: 'flatton',
// }
```

2. __`joinUrl`__ accepts an object with configuration

* url | string, _`https://domain.name`_
* paths | array, _`['users', 'id']`_
* searchParams | object _`{ sortBy: 'name' }`_
 
__Example__
 
```javascript
 joinUrl({
  url: 'https://domain.name',
  paths: ['users', 'id'],
  searchParams: { 
    sortBy: 'name' 
  }
 })
// => https://domain.name/users/id?sortBy=name
```

3. __`joinRoute`__ accepts an object with configuration

* pathname | string, _(`users/`)_ 
* search | string, _(`name=dan`)_ 
* paths | array, _(`['all']`)_
* searchParams | object _(`{ sortBy: 'name' }`)_
 
 __Example__
 
 ```javascript
 joinRoute({
  pathname: 'users',
  search: 'name=dan',
  paths: ['all'],
  searchParams: { 
    sortBy: 'name' 
  }
 })
// => users/all?name=dan&sortBy=name
```
