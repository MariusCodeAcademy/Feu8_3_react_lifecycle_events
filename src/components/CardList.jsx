import Card from './Card';
import Grid from './UI/Grid';

const cardsData = [
  { id: 1, title: 'HTML', body: 'Is the sturture of web' },
  { id: 2, title: 'CSS', body: 'Is the style of web' },
  { id: 3, title: 'JS', body: 'Is the interactivity' },
];

function CardList() {
  console.log('<CardList />');

  const cardListJsx = cardsData.map((cObj) => (
    <Card key={cObj.id} heading={cObj.title} text={cObj.body} />
  ));

  return <Grid cols='3'>{cardListJsx}</Grid>;
}

export default CardList;
