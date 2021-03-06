const Three = ({ children }) => {
  const boxStyle = {
    width: '150px',
    height: '50px',
    border: '2px solid blue',
    display: 'inline-block',
    marginRight: '16px',
    textAlign: 'center',
    verticalAlign: 'center',
    lineHeight: '50px'
  }

  return (
    <div style={boxStyle}>
      { children ? children : 3 }
    </div>
  );
}

export default Three;
