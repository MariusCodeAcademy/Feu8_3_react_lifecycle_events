import Grid from '../UI/Grid';

function Counter() {
  return (
    <div className='counter'>
      <h2>Label</h2>
      <p className='counterValue'>0</p>
      <Grid cols='2'>
        <button>UP</button>
        <button>Down</button>
      </Grid>
    </div>
  );
}
export default Counter;
