export default function Card({name,img,onClick}){
    return (
        <div className="card" >
            <img src={img} alt={name}></img>
            <h3>{name}</h3>
            <button onClick={onClick}>Add</button>
        </div>
    )
}