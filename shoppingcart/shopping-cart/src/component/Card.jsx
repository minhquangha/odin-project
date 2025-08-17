export default function Card({name,img,handleButtonBuy}){
    return (
        <div className="card">
            <img src={img} alt={name}></img>
            <h3>{name}</h3>
            <button onClick={handleButtonBuy}>Add</button>
        </div>
    )
}