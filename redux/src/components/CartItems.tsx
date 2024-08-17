import { addToCart, removeFromCart } from "../store/cart-slice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export default function CartItems() {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);
  const formattedTotalPrice = cartItems.reduce(
    (val, item) => (val += item.price * item.quantity),
    0
  );

  function handleAddToCart(item: { id: string; title: string; price: number }) {
    dispatch(addToCart(item));
  }

  function handleRemoveFromCart(itemId: string) {
    dispatch(removeFromCart(itemId));
  }

  return (
    <div id="cart">
      {cartItems.length === 0 && <p>No items in cart!</p>}

      {cartItems.length > 0 && (
        <ul id="cart-items">
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
