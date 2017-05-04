'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var One;
  return {
    setters: [],
    execute: function () {
      One = function One() {
        var boxStyle = {
          width: '150px',
          height: '50px',
          border: '1px solid black',
          display: 'inline-block',
          marginRight: '16px',
          textAlign: 'center',
          verticalAlign: 'center',
          lineHeight: '50px'
        };

        return React.createElement(
          'div',
          { style: boxStyle },
          '1'
        );
      };

      _export('default', One);
    }
  };
});