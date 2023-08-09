import { useState } from 'react';

function Card(props) {
  const [isItSpecial, setIsItSpecial] = useState(false);

  function makeSpecial() {
    console.log('makeSpecial');
    setIsItSpecial(true);
  }

  function toggleSpecial() {
    // turim padaryti true jei yra false, false jei yra true;
    // setIsItSpecial(isItSpecial ? false : true);
    setIsItSpecial(!isItSpecial);
  }

  const computeClass = isItSpecial ? 'special card' : 'card';
  console.log('computeClass ===', computeClass);

  const { heading, text } = props;
  return (
    <div className={computeClass}>
      <h3 className='cardTitle'>{heading}</h3>
      <p className='cardText'>{text}</p>
      <button onClick={toggleSpecial}>
        Make {isItSpecial ? 'normal' : 'special'}
      </button>
    </div>
  );
}
export default Card;
