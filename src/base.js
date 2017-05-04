import React from 'react';
import ReactDOM from 'react-dom';
window.React = React;
window.ReactDOM = ReactDOM;

class AppBase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sub: []
    }
  }

  showMore = (number) => {
    switch (number) {
      case 1:
        const One = SystemJS.import(`${number}.js`);
        const Two = SystemJS.import(`${number + 1}.js`);

        Promise.all([ One, Two ]).then((values) => {
          this.setState({
            sub: values.map((m) => {
              return React.createElement(
                m.default,
                { key: `child-${values.indexOf(m) + 1}` },
                null
              );
            })
          });
        });
        break;
      case 2:
        const Dos = SystemJS.import(`${number}.js`);
        const Tres = SystemJS.import(`${number + 1}.js`);

        Promise.all([ Dos, Tres ]).then((values) => {
          this.setState({
            sub: values.map((m) => {
              return React.createElement(
                m.default,
                { key: `child-${values.indexOf(m) + 2}` },
                null
              );
            })
          });
        });
        break;
      default:
        break;
    }
  }

  render() {
    const boxStyle = {
      width: '150px',
      height: '50px',
      border: '1px solid black',
      display: 'inline-block',
      marginRight: '16px',
      textAlign: 'center',
      verticalAlign: 'center',
      lineHeight: '50px',
      cursor: 'pointer'
    }

    return (
      <div>
        <div
          style={{
            width: '80%',
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '16px'
          }}
        >
          <div style={boxStyle} onClick={() => this.showMore(1)}>A</div>
          <div style={boxStyle} onClick={() => this.showMore(2)}>B</div>
          <div style={boxStyle}>C</div>
        </div>
        <div
          style={{
            width: '80%',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid black'
          }}
          id="secondary"
        >
          { this.state.sub.length > 0 ? this.state.sub : null }
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <AppBase />,
  document.getElementById('react-root')
);
