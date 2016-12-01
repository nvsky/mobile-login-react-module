# mobile-login-react-module
---

mobile login react modules

[![build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm download][download-image]][download-url]

[travis-image]: https://travis-ci.org/nvsky/mobile-login-react-module.svg?style=flat-square
[travis-url]: https://travis-ci.org/nvsky/mobile-login-react-module
[npm-image]: https://img.shields.io/npm/v/mobile-login-module.svg?style=flat-square
[npm-url]: http://npmjs.org/package/mobile-login-module 
[coveralls-image]: https://coveralls.io/repos/github/nvsky/mobile-login-react-module/badge.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/nvsky/mobile-login-react-module?branch=master
[download-image]: https://img.shields.io/npm/dm/mobile-login-module.svg?style=flat-square
[download-url]: https://npmjs.org/package/mobile-login-module

## install

[![mobile-login-module](https://nodei.co/npm/mobile-login-module.png)](https://npmjs.org/package/mobile-login-module)

## Usage

```js
var Login = require('mobile-login-module');
var React = require('react');
React.render(<Login />, container);
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>prefixCls</td>
          <td>String</td>
          <td>rc-login</td>
          <td></td>
        </tr>
        <tr>
          <td>getCode</td>
          <td>fun</td>
          <td>''</td>
          <td>get code, param is phone value</td>
        </tr>
        <tr>
          <td>getLogin</td>
          <td>fun</td>
          <td></td>
          <td>login, first param is phone value, second param is code value</td>
        </tr>
    </tbody>
</table>

## Development

```
npm install mobile-login-module --save
npm start
```

## Example

https://nvsky.github.io/mobile-login-react-module/build/


