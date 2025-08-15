export default function Card({ name, img }) {
    return (
        <div className='card'>
            <div className='imgContainer'>
                <img src={img} alt={name} />
            </div>
            <p>{name}</p>
        </div>
    );
}
