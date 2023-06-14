import "./Product_card.css"

const Product_card = ({ name, description, price }) => {
  return (
    <div className="card">
    <h4>{name}</h4>
    <p>{description}</p>
    <p>Price: {price}</p>
  </div>
  )
}

export default Product_card