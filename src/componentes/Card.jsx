const Card = ({ galería }) => {
    return (
        <div className="card">
            <img src= {galería.img} className="card-img-top" alt={galería.título} />
            <div className="card-body">
                <h5 className="card-title">{galería.título}</h5>
                <p className="card-tet">{galería.descripción}</p>
            </div>
        </div>
    )
}

export default Card