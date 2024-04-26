/* REDUX */
import { useDispatch, useSelector } from "react-redux"
import { updateCartQuantity, removeFromCart } from "../data/CartActionCreators"

export const CartDetailsRows = () => {
  const cart = useSelector((state) => state.cart)
  const cartPrice = useSelector((state) => state.cartPrice)
  const dispatch = useDispatch()

  const handleChange = (product, event) => {
    dispatch(updateCartQuantity(product, event.target.value))
  }

  return (
    <>
      {!cart || cart.length === 0 ? (
        <tr>
          <td colSpan="5">Your cart is empty</td>
        </tr>
      ) : (
        <>
          {cart.map((item) => (
            <tr key={item.product.id}>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(ev) => handleChange(item.product, ev)}
                />
              </td>
              <td>{item.product.name}</td>
              <td>${item.product.price.toFixed(2)}</td>
              <td>${(item.quantity * item.product.price).toFixed(2)}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => dispatch(removeFromCart(item.product))}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <th colSpan="3" className="text-right">
              Total:
            </th>
            <th colSpan="2">${cartPrice.toFixed(2)}</th>
          </tr>
        </>
      )}
    </>
  )
}
