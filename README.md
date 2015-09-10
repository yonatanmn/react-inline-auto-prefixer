# react inline auto-prefixer

this is a strong utility for adding prefixes for inline styles as used in React.js, that supports most css prefixes, browser or server rendering, and nested style objects.&nbsp;

## Usage:
```javascript
var prefixedStyle = autoprefix(stylesObject);
````
### Example
```javascript
import autoprefix from 'autoprefix';

var Component = React.createClass({
  render() {
      return (
        <div style={autoprefix({flexDirection:'row'})>
            auto-prefixes with every render (suitable when state/props changes style)
        </div>
        <div style={this.styleSheet.style1)>
            styleSheet will only be auto-prefixed once on mount - more performant
        </div>
        <div style={this.styleSheet.style2.nested1)>
            works also when nested
        </div>
      )
   }
  styleSheet: autoprefix({
     style1:{
        justifyContent: 'space-between',
        overflow: 'auto',
        flexShrink: 0
      },
      style2:{
        nested1:{
          display: 'flex',
          width: 'calc(100% - 10px)'
        }
      }
    })
})

```

### Server rendering
By default, it will add prefixes only for the client's browser. When doing server rendering of a react page, you should add prefixes for every relevant browser. that's really easy -

```javascript
var prefixedStyle = autoprefix(stylesObject, true);
// or - even easier, when requiring autoprefix, do this:
var autoprefix = require('autoprefix')(true);
````

## Supports:
- flex:
  - display: flex
  - alignContent
  - alignItems
  - alignSelf
  - flex
  - flexBasis
  - flexDirection
  - flexFlow
  - flexGrow
  - flexShrink
  - flexWrap
  - justifyContent
- old flex box (new flex properties are transformed automatically)
- animation, and its sub properties::
  - Delay
  - Direction
  - Duration
  - FillMode
  - IterationCount
  - Name
  - PlayState
  - TimingFunction
- appearance
- backfaceVisibility
- backgroundClip
- borderImage, borderImageSlice
- boxShadow
- boxSizing
- calc
- clipPath
- columns
- cursor
- fontSmoothing
- order
- perspective, perspectiveOrigin
- transform, and its sub properties:
  - Origin
  - OriginX
  - OriginY
  - OriginZ
  - Style
- transition, and its sub properties:
  - Delay
  - Duration
  - Property
  - TimingFunction
- userSelect


### Installation

```sh
$ npm install auto-prefixer --save
```


[![Travis build status](http://img.shields.io/travis/yonatanmn/react-inline-auto-prefixer.svg?style=flat)](https://travis-ci.org/yonatanmn/react-inline-auto-prefixer)
[![Code Climate](https://codeclimate.com/github/yonatanmn/react-inline-auto-prefixer/badges/gpa.svg)](https://codeclimate.com/github/yonatanmn/react-inline-auto-prefixer)
[![Test Coverage](https://codeclimate.com/github/yonatanmn/react-inline-auto-prefixer/badges/coverage.svg)](https://codeclimate.com/github/yonatanmn/react-inline-auto-prefixer)
[![Dependency Status](https://david-dm.org/yonatanmn/react-inline-auto-prefixer.svg)](https://david-dm.org/yonatanmn/react-inline-auto-prefixer)
[![devDependency Status](https://david-dm.org/yonatanmn/react-inline-auto-prefixer/dev-status.svg)](https://david-dm.org/yonatanmn/react-inline-auto-prefixer#info=devDependencies)
