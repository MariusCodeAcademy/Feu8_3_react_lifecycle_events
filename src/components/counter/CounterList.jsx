import Grid from '../UI/Grid';
import Counter from './Counter';

function CounterList() {
  return (
    <Grid cols='3'>
      <Counter what='Pullups' />
      <Counter what={'Km ran'} />
      <Counter />
    </Grid>
  );
}
export default CounterList;
