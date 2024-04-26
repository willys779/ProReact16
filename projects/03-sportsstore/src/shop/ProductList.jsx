/* REDUX */
import { useDispatch } from "react-redux"
import { addToCart } from "../data/CartActionCreators"

export const ProductList = ({ products }) => {
  const dispatch = useDispatch()

  return (
    <>
      {products == null || products.length === 0 ? (
        <h5 className="p-2">No Products</h5>
      ) : (
        products.map((p) => (
          <div className="card m-1 p-1 bg-light" key={p.id}>
            <h4>
              {p.name}
              <span className="badge rounded-pill text-bg-primary float-end">
                ${p.price.toFixed(2)}
              </span>
            </h4>
            <div className="card-text bg-white p-1">
              {p.description}
              <button
                className="btn btn-success btn-sm float-end"
                onClick={() => dispatch(addToCart(p))}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))
      )}
    </>
  )
}
