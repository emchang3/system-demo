'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var Three;
  return {
    setters: [],
    execute: function () {
      Three = function Three(_ref) {
        var children = _ref.children;

        var boxStyle = {
          width: '150px',
          height: '50px',
          border: '2px solid blue',
          display: 'inline-block',
          marginRight: '16px',
          textAlign: 'center',
          verticalAlign: 'center',
          lineHeight: '50px'
        };

        return React.createElement(
          'div',
          { style: boxStyle },
          children ? children : 3
        );
      };

      _export('default', Three);
    }
  };
});