function Card(props) {
  // console.log('props ===', props);
  // const heading = props.heading;
  // const text = props.text;
  const { heading, text } = props;
  return (
    <div className='card'>
      <h3 className='cardTitle'>{heading}</h3>
      <p className='cardText'>{text}</p>
    </div>
  );
}
export default Card;
