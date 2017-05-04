'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var Three;
  return {
    setters: [],
    execute: function () {
      Three = function Three() {
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
          '3'
        );
      };

      _export('default', Three);
    }
  };
});