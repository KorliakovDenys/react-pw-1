import '../styles/Card.css'

export const Card = ({data}) => {
    return (
        <div className="card">
            <div className="img_wrapper">
                <img src={data.img} alt="" className="cardImg"/>
            </div>
            <h5>{data.name}</h5>
        </div>
    )
}