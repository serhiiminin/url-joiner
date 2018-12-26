**URL-JOINER**

_Handy utils for merging and parsing url_

> npm i url-joiner --save

_or_

> yarn add url-joiner



This package provides 3 functions that can be used for different purposes

1. _`parseSearchParams`_ accepts search query string 
  - search | string _('name=ken&surname=flatton')_
  
_example_
`parseSearchParams('name=ken&surname=flatton')` will return

```
{
  name: 'ken',
  surname: 'flatton',
}
```

2. _`joinUrl`_ accepts an object with configuration

 - url | string, _`https://domain.name`_
 - paths | array, _`['users', 'id']`_
 - searchParams | object _`{ sortBy: 'name' }`_
 
 _example_
 
 ```
 joinUrl({
  url: 'https://domain.name',
  paths: ['users', 'id'],
  searchParams: { 
    sortBy: 'name' 
  }
 })

```

returns `https://domain.name/users/id?sortBy=name`

2. _`joinRoute`_ accepts an object with configuration

- pathname | string, _(`users/`)_ 
- search | string, _(`name=dan`)_ 
- paths | array, _(`['all']`)_
- searchParams | object _(`{ sortBy: 'name' }`)_
 
 _example_
 
 ```
 joinRoute({
  pathname: 'users',
  search: 'name=dan',
  paths: ['all'],
  searchParams: { 
    sortBy: 'name' 
  }
 })

```

returns `users/all?name=dan&sortBy=name`
