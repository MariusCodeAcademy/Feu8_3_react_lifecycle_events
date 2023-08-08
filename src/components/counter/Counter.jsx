import Grid from '../UI/Grid';

function Counter() {
  console.log('<Counter generated />');

  let countNum = 25;

  function goUp() {
    console.count('goUp');
    countNum++;
    console.log('countNum ===', countNum);
  }

  return (
    <div className='counter'>
      <h2>Label</h2>
      <p className='counterValue'>{countNum}</p>
      <Grid cols='2'>
        <button onClick={goUp}>UP</button>
        <button>Down</button>
      </Grid>
    </div>
  );
}
export default Counter;
