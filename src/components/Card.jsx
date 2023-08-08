function Card(props) {
  return (
    <div className='card'>
      <h3 className='cardTitle'>{props.heading}</h3>
      <p className='cardText'>text</p>
    </div>
  );
}
export default Card;
