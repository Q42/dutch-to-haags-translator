# dutch-to-haags-translator
> Translate Dutch to the Hague dialect

## Installation
With [npm](https://www.npmjs.com/) installed, run
```bash
$ npm install @q42/dutch-to-haags-translator --save
```

## Usage
```javascript
import { translate } from 'dutch-to-haags-translator';
console.log(translate('Oh oh Den Haag, mooie stad achter de duinen!'));
  
// Result: "Oh oh De Haag, mauie stad achtâh de dùinûh!"
```

## Debugging
```javascript
import { showHits } from 'dutch-to-haags-translator';
showHits('Oh oh Den Haag, mooie stad achter de duinen!');
```

## Thanks!
This project is a port of the [HaagsTranslator](https://github.com/Q42/HaagsTranslator) project.   
Special thanks to: [Mark](https://github.com/crunchie84),
[Maurice](https://github.com/mauricehaak), [Roelfjan](https://github.com/roelfjan), Sjaak Bral, Marnix Rueb and Robert-Jan Rueb

## Develop
```bash
$ npm run compile:watch
$ npm run test
```

## Deploy
```bash
# bump version
$ npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]
   
# not sure yet, do a dryrun
$ npm run dryrun
   
# pubplish
$ npm publish
```

## License
[MIT](https://opensource.org/licenses/MIT)
