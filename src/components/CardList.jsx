import Card from './Card';

function CardList() {
  return (
    <div className='cardList'>
      <Card heading='Html' text='Is the sturture of web' />
      <Card heading='CSS' text='Is the style of web' />
      <Card heading='JS' text='Is the interactivity' />
    </div>
  );
}

export default CardList;
