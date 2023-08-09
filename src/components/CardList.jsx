import Card from './Card';
import Grid from './UI/Grid';

function CardList(props) {
  console.log('<CardList />');

  const cardListJsx = props.list.map((cObj) => (
    <Card key={cObj.id} heading={cObj.title} text={cObj.body} />
  ));

  return <Grid cols='3'>{cardListJsx}</Grid>;
}

export default CardList;
