import Card from './Card';
import Grid from './UI/Grid';

function CardList(props) {
  console.log('<CardList />');

  const cardListJsx = props.list.map((cObj) => (
    <Card key={cObj.id} heading={cObj.title} text={cObj.body} />
  ));

  const kiekCorteliu = props.list.length;

  const titleString = props.list.map((cObj) => cObj.title).join(', ') + '.';
  console.log('titleString ===', titleString);

  return (
    <div>
      <Grid cols='4'>{cardListJsx}</Grid>
      <h3>Viso korteliu: {kiekCorteliu}</h3>
      <p className='tags'>All titles: {titleString}</p>
    </div>
  );
}

export default CardList;
