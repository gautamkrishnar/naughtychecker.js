# naughtychecker.js
NodeJS module to check Naughty Strings. Naughty Strings is a set of strings which have a high probability of causing issues when used as user-input data.

### Why Test Naughty Strings?
Even multi-billion dollar companies like are using automated tests to validate the input. You can't tweet a  zero-width space (U+200B) on Twitter:

![Example](http://i.imgur.com/HyDg2eV.gif)

Its required to prevent serious errors like "internal server error" for unexpected user inputs while validation.

### Installation

```shell
  npm install naughtychecker --save
```

### Usage
Use offline database of naughty strings ([blns.json](blns.json)) to validate the input:
```js
  var naughtychecker = require('naughtychecker');
  strvalidate = naughtychecker.strvalidate;
  var text = "NULL";
  strvalidate(text); // Returns true because "NULL" is a naughty string
  text = "Hai"
  strvalidate(text); // Returns false
```

Use online database of naughty strings from [Big List of Naughty Strings](https://github.com/minimaxir/big-list-of-naughty-strings) to validate the input:
```js
  var naughtychecker = require('naughtychecker');
  var strvalidateonline = naughtychecker.strvalidateonline;
  var text = "NIL";
  strvalidateonline(text); // Returns true because "NIL" is a naughty string
  text = "Hello"
  strvalidateonline(text); // Returns false
```

### Inspiration
This project is inspired from [Big List of Naughty Strings](https://github.com/minimaxir/big-list-of-naughty-strings) and uses the naught strings list from that project.

### Contributing
Feel free to Clone the project and submit your improvements via pull requests.

#### Contributors
* <your name here>

#### Release History

* 1.0.0 Initial Release