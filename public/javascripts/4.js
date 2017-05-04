'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var Four;
  return {
    setters: [],
    execute: function () {
      Four = function Four(_ref) {
        var children = _ref.children;

        var boxStyle = {
          width: '150px',
          height: '50px',
          border: '2px solid orange',
          display: 'inline-block',
          marginRight: '16px',
          textAlign: 'center',
          verticalAlign: 'center',
          lineHeight: '50px'
        };

        return React.createElement(
          'div',
          { style: boxStyle },
          '4 ',
          children ? children : null
        );
      };

      _export('default', Four);
    }
  };
});