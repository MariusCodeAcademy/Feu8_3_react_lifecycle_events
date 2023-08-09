import { useState } from 'react';

function Card(props) {
  const [isItSpecial, setIsItSpecial] = useState(false);

  function makeSpecial() {
    console.log('makeSpecial');
    setIsItSpecial(true);
  }

  const computeClass = isItSpecial ? 'special card' : 'card';
  console.log('computeClass ===', computeClass);

  const { heading, text } = props;
  return (
    <div className={computeClass}>
      <h3 className='cardTitle'>{heading}</h3>
      <p className='cardText'>{text}</p>
      <button onClick={makeSpecial}>Make special</button>
    </div>
  );
}
export default Card;
