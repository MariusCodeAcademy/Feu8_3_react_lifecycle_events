import { useState } from 'react';
import Grid from '../UI/Grid';

function Counter(props) {
  // jei skaicius yra daugaiu uz 5 tai jis yra zalias
  // jei 0 - 5 tai raudonas

  console.log('<Counter generated />');
  // jei reikia kad reiksme atsivaizduotu jsxe, paprastas kintamasis netinka
  // let countNum = 25;
  // sukuriam State pavadinimu countNum ir jo atnaujinimo funkcija
  const [countNum, setCountNum] = useState(0);

  function goUp() {
    console.count('goUp');
    // mes niekada tiesiogiai nekeiciam State kintamojo
    // countNum++
    // kintamaji atnaujinam paduodami nauja reiksme i atnaujinimo fn argumenta

    setCountNum(countNum + 1);
    // console.log('countNum ===', countNum);
  }
  console.log(`countNum yra ${countNum > 0 ? 'teigiamas' : 'neigiamas'}`);

  // goDown() - kuri pamazina state 1
  function goDown() {
    console.log('down');
    // neleisti buti neigiamu
    if (countNum < 1) {
      return;
    }
    setCountNum(countNum - 1);
  }

  function reset() {
    setCountNum(0);
  }

  const redOrGreen = countNum > 5 ? 'green' : 'red';

  return (
    <div className='counter'>
      {/* <h2>{props.what}</h2> */}
      <h2>{props.what ? props.what : 'Label'}</h2>
      {/* <h2>{props.what ?? 'Label'}</h2> */}
      <p className={`${redOrGreen} counterValue`}>{countNum}</p>
      <Grid cols='3'>
        <button onClick={goUp}>UP</button>
        {countNum > 0 && (
          <button disabled={countNum < 1} onClick={goDown}>
            Down
          </button>
        )}
        {/* rodyti reset tik jei skaicius nelygus 0 */}
        {countNum !== 0 && <button onClick={reset}>Reset</button>}
      </Grid>
    </div>
  );
}
export default Counter;
