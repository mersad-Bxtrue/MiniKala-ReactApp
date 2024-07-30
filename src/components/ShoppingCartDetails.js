import ShoppingCartItem from "./ShoppingCartItem"

export default function ShoppingCartDetails({ cartItem, productQuantities, onProductQuantityChange, totalPrice, onClearCart }) {
    return (
        <section className="shoppingCart-details">
            {cartItem.length !== 0 ?
                cartItem.map((item) => (
                    <ShoppingCartItem
                        item={item}
                        productQuantity={productQuantities[item.id] || 0}
                        onProductQuantityChange={onProductQuantityChange}
                        key={item.id}
                    />
                )) :
                <p className='empty-cart_message'>سبد خرید شما خالی است 🛒</p>
            }

            {cartItem.length !== 0 &&
                <>
                    <div className="total-price">
                        <p>مجموع سبد خرید :</p>
                        <div className="cart-item_price">
                            <span>
                                {totalPrice.toLocaleString("fa-ir")}
                            </span>
                            تومان
                        </div>
                    </div>

                    <div className="cart-details_controller">
                        <button className="cart-details_controller-btn" onClick={onClearCart}> {/* Add onClick handler */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="rgba(239, 64, 86, 1)" style={{ verticalAlign: "sub" }}><path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path></svg>
                            پاکسازی سبد خرید
                        </button>
                        <button className="continue-shopping">
                            تایید و تکمیل سفارش
                        </button>
                    </div>
                </>}

        </section>
    );
}
