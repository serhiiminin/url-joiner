# url-joiner

_Handy utils for merging and parsing url_

## Installation

```
npm i url-joiner --save
```

_or_

```
yarn add url-joiner
```

## Usage

**getUrlParts(url)**

```javascript
import { getUrlParts } from "url-joiner";

getUrlParts("https://example?name=ken");

// ['https://example', 'name=ken']
```

**joinUrl(url, search)**

```javascript
import { joinUrl } from "url-joiner";

joinUrl("https://domain.name", "name=ken");

// 'https://domain.name?name=ken'
```

**joinPath(url, ...paths)**

```javascript
import { joinPath } from "url-joiner";

joinPath("https://domain.name", "users", "id", "preview");

// 'https://domain.name/users/id/preview'
```

**parseSearch(search)**

```javascript
import { parseSearch } from "url-joiner";

parseSearch("name=james&surname=willis");

// {
//   name: 'james',
//   surname: 'willis',
// }
```

**mergeSearch(search, params)**

```javascript
import { mergeSearch } from "url-joiner";

mergeSearch("name=james&surname=willis", {
  name: "ken",
  age: "21"
});

// 'name=ken&surname=willis&age=21'
```
