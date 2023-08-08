import Card from './Card';
import Grid from './UI/Grid';

function CardList() {
  console.log('<CardList />');
  return (
    <Grid cols='3'>
      <Card heading='Html' text='Is the sturture of web' />
      <Card heading='CSS' text='Is the style of web' />
      <Card heading='JS' text='Is the interactivity' />
    </Grid>
  );
}

export default CardList;
