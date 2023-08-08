import { useState } from 'react';
import Grid from '../UI/Grid';

function Counter() {
  console.log('<Counter generated />');
  // jei reikia kad reiksme atsivaizduotu jsxe, paprastas kintamasis netinka
  // let countNum = 25;
  // sukuriam State pavadinimu countNum ir jo atnaujinimo funkcija
  const [countNum, setCountNum] = useState(25);

  function goUp() {
    console.count('goUp');
    // mes niekada tiesiogiai nekeiciam State kintamojo
    // countNum++
    // kintamaji atnaujinam paduodami nauja reiksme i atnaujinimo fn argumenta

    setCountNum(countNum + 1);
    // console.log('countNum ===', countNum);
  }

  // goDown() - kuri pamazina state 1
  function goDown() {
    console.log('down');
    setCountNum(countNum - 1);
  }

  return (
    <div className='counter'>
      <h2>Label</h2>
      <p className='counterValue'>{countNum}</p>
      <Grid cols='3'>
        <button onClick={goUp}>UP</button>
        <button onClick={goDown}>Down</button>
        <button>Reset</button>
      </Grid>
    </div>
  );
}
export default Counter;
