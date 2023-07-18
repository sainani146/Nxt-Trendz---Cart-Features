import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalItems = cartList.length
      let total = 0

      cartList.forEach(a => {
        total += a.quantity * a.price
      })

      return (
        <div className="cart-summary-container">
          <div className="cart-summary">
            <h1 className="total-orders">
              Order Total: <span className="amount">{`Rs ${total}`}</span>/-
            </h1>
            <p className="total-items">{`${totalItems} items in cart`}</p>
            <button type="button" className="checkout-button">
              CheckOut
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
