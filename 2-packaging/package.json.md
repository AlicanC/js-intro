# package.json

`package.json` is a file used by package managers (e.g. **npm** and **Yarn**) to store information about your package. It contains information such as your package's name, version, license, dependencies and scripts.

It uses a format called [JSON](https://en.wikipedia.org/wiki/JSON). While it means "JavaScript Object Notation", it is used in many programming languages and platforms to [serialize](https://en.wikipedia.org/wiki/Serialization) and transfer data.

Here is an example `package.json`:
```json
{
  "name": "js-intro-example",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}
```

It basically contains an object with four properties with string values. If we were to declare the same object in JavaScript (according to Airbnb's JavaScript style guidelines) it would look like this:
```javascript
const package = {
  name: 'js-intro-example',
  version: '1.0.0',
  main: 'index.js',
  license: 'MIT',
};
```

A more complicated `package.json` could look like this:
```json
{
  "name": "js-intro-example",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "start": "node src/index.js",
    "test": "jest"
  },
  "dependencies": {
    "react": "^15.5.4",
    "react-dom": "^15.5.4"
  },
  "devDependencies": {
    "jest": "^20.0.4"
  }
}
```

This `package.json` contains an object with seven properties. Four of them have string values and three of them has object values. Those three objects have properties with string values. It would look like this in JavaScript:
```javascript
const package = {
  name: 'js-intro-example',
  version: '1.0.0',
  main: 'index.js',
  license: 'MIT',
  scripts: {
    start: 'node src/index.js',
    test: 'jest',
  },
  dependencies: {
    react: '^15.5.4',
    'react-dom': '^15.5.4',
  },
  devDependencies: {
    jest: '^20.0.4',
  },
};
```
