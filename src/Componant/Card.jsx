function Card(props){
 return(
<>
<div className="cards">
    <div className="card">
        <img src={props.imagsrc} className="card_img" alt={props.alt} />
    <div className="card_info">
        <span className="card_category"> {props.title}</span>
        <h3 className="card_title">{props.name}</h3>
        <a href={props.link}> <button>Watch Now</button></a>
        </div>
    </div>
</div>
</>
 );
}
export default Card;