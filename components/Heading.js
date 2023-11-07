const Heading = ({ tag, text }) => {
  const Tag = tag || 'h1';
  const myStyle = {
    color: 'red',
    backgroundColor: 'lightgrey',
    padding: '10px',
    width: '50%'
  };
  return <Tag style={ myStyle }>{text}</Tag>
}

export default Heading;
