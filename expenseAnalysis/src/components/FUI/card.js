import './card.css';

function Card(params) {
 const classes = "card " + params.className;
  return(
  <div className={classes}>{params.children}</div>
  )
}

export default Card;
