export default function Card({ name, img,onClick }) {
    return (
        <div className='card' onClick={onClick}>
            <div className='imgContainer'>
                <img src={img} alt={name} />
            </div>
            <p>{name}</p>
        </div>
    );
}
