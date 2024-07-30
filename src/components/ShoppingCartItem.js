export default function ShoppingCartItem({ item, productQuantity, onProductQuantityChange }) {
    const productPrice = item.price * productQuantity;

    return (
        <div className='cart-item_sidebar'>
            <div>
                <img className="cart-item_image" src={item.image} alt={item.name} />
            </div>

            <div className='cart-item_sidebar-row'>
                <h3 className="cart-item_name">
                    <a href='#nothing'>{item.name}</a>
                </h3>

                <div className="buy_cart-item">
                    <div className="cart-item_price">
                        <span>
                            {productPrice.toLocaleString("fa-ir")}
                        </span>
                        تومان
                    </div>

                    <div className='change-item_number'>
                        <button className='add-item_number' onClick={() => onProductQuantityChange(item.id, 1)}>+</button>
                        <span className='item-number'>{productQuantity.toLocaleString("fa-ir")}</span>
                        <button className='subtract-item_number' onClick={() => onProductQuantityChange(item.id, -1)}>-</button>
                    </div>
                </div>
            </div>
        </div>
    );
}