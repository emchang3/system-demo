const Four = ({ children }) => {
  const boxStyle = {
    width: '150px',
    height: '50px',
    border: '2px solid orange',
    display: 'inline-block',
    marginRight: '16px',
    textAlign: 'center',
    verticalAlign: 'center',
    lineHeight: '50px'
  }

  return (
    <div style={boxStyle}>4 { children ? children : null }</div>
  );
}

export default Four;
