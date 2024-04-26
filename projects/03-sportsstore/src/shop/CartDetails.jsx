import { Link } from "react-router-dom"
import { CartDetailsRows } from "./CartDetailsRows"
/* REDUX */
import { useSelector } from "react-redux"

export const CartDetails = () => {
  const cartItems = useSelector((state) => state.cartItems)

  const getLinkClasses = () => `btn btn-secondary m-1
    ${cartItems === 0 ? "disabled" : ""}`

  return (
    <div className="m-3">
      <h2 className="text-center">Your Cart</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Product</th>
            <th className="text-right">Price</th>
            <th className="text-right">Subtotal</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <CartDetailsRows />
        </tbody>
      </table>
      <div className="text-center">
        <Link className="btn btn-primary m-1" to="/shop/products">
          Continue Shopping
        </Link>
        <Link className={getLinkClasses()} to="/shop/checkout">
          Checkout
        </Link>
      </div>
    </div>
  )
}
