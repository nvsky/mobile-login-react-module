# mobile-login-react-module
---

mobile login react modules

[![build status](https://travis-ci.org/nvsky/mobile-login-react-module.svg?style=flat-square)](https://travis-ci.org/nvsky/mobile-login-react-module)
[![Test coverage][coveralls-image]][coveralls-url]

[coveralls-image]: https://coveralls.io/repos/github/nvsky/mobile-login-react-module/badge.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/nvsky/mobile-login-react-module?branch=master

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
npm install
npm start
```

## Example

http://localhost:8001/examples/


