import { useState, useEffect } from 'react';

export default function ProductsItem({ product, cartItem, productQuantity, onAddProduct, onProductQuantityChange }) {
    const productPrice = product.price.toLocaleString("fa-ir");
    const [timeLeft, setTimeLeft] = useState(product.discountDurationHours * 60 * 60);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTimeLeft) => (prevTimeLeft > 0 ? prevTimeLeft - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => {
        const formatter = new Intl.NumberFormat('fa-IR', {
            minimumIntegerDigits: 2,
            useGrouping: false
        });

        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;

        return `${formatter.format(hours)} : ${formatter.format(minutes)} : ${formatter.format(seconds)}`;
    };

    return (
        <div className="product-item">
            <div className="product-image_row">
                <img className="product-image" src={product.image} alt={product.name} />
            </div>

            <div className="product-details">
                <h3 className="product-name">
                    <a href='#nothing'>{product.name}</a>
                </h3>

                <div className="product-info">
                    <div className="product-sender">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0051ff" style={{ transform: "rotate(180deg)", verticalAlign: "middle", marginLeft: "5px" }}>
                            <path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path>
                        </svg>
                        {product.sender === "digikala" ? "ارسال توسط مینی کالا" : "ارسال توسط فروشنده"}
                    </div>

                    <div className="product-rate">
                        {product.rate}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFDF00" style={{ verticalAlign: "sub", marginRight: "5px" }}>
                            <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                        </svg>
                    </div>
                </div>

                <div className="buy-product">
                    {productQuantity > 0 ?
                        <div className='change-item_number'>
                            <button className='add-item_number' style={{ width: "30px", height: "22px" }} onClick={() => onProductQuantityChange(product.id, 1)}>+</button>
                            <span className='item-number'>{productQuantity.toLocaleString("fa-ir")}</span>
                            <button className='subtract-item_number' style={{ width: "30px", height: "22px" }} onClick={() => onProductQuantityChange(product.id, -1)}>-</button>
                        </div> :
                        <button className="addcart-btn" onClick={() => onAddProduct(product)}>افزودن به سبد خرید</button>}
                    <div className="product-price">
                        <span>
                            {productPrice}
                        </span>
                        تومان
                    </div>
                </div>

                <div className="amount-sold">
                    <div style={{ width: `${product.amountSold}%` }}></div>
                </div>

                <div className="amount-sold_details">
                    <div className="amount-sold_percent">
                        {`${product.amountSold.toLocaleString("fa-ir")}%`}
                        <p>فروش رفته</p>
                    </div>
                    <div className="end-of_discounts" style={{ direction: "ltr" }}>
                        {formatTime(timeLeft)}
                    </div>
                </div>
            </div>
        </div >
    );
}
