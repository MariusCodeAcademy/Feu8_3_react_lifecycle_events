function Grid(props) {
  console.log('<Grid />');
  const gridStyle = {
    gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
  };
  return (
    <div style={gridStyle} className='grid'>
      {props.children}
    </div>
  );
}
export default Grid;
