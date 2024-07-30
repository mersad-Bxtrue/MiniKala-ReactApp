import ProductsItem from "./ProductsItem"
const products = [
    {
        id: 158266,
        name: "اسپرسو ساز پرومکس مدل ECM2010",
        image: "/image/espresso-maker.webp",
        price: 5290000,
        rate: 3.9,
        sender: "Seller",
        amountSold: 56,
        discountDurationHours: 32,
        isAddedToCart: false
    },
    {
        id: 974617,
        name: "ساعت هوشمند اپل مدل Series 9 Aluminum 45mm M/L",
        image: "/image/smart-watch.webp",
        price: 19499000,
        rate: 4.5,
        sender: "digikala",
        amountSold: 88,
        discountDurationHours: 15,
        isAddedToCart: false
    },
    {
        id: 385411,
        name: "مانیتور ال جی مدل 24MR400-B سایز 23.8 اینچ",
        image: "/image/monitor.webp",
        price: 2450000,
        rate: 2.1,
        sender: "Seller",
        amountSold: 69,
        discountDurationHours: 27,
        isAddedToCart: false
    },
    {
        id: 44578,
        name: "کفش پیاده روی سارزی مدل sil_r.a.m.a_nr.n.j",
        image: "/image/sneaker.webp",
        price: 299000,
        rate: 2.5,
        sender: "Seller",
        amountSold: 25,
        discountDurationHours: 45,
        isAddedToCart: false
    },
    {
        id: 112858,
        name: "پوشینه چسبی بزرگسال ایزی لایف سایز بزرگ بسته 14 عددی",
        image: "/image/diaper.webp",
        price: 391800,
        rate: 4.0,
        sender: "digikala",
        amountSold: 41,
        discountDurationHours: 8,
        isAddedToCart: false
    },
    {
        id: 852445,
        name: "پودر آمینو EAA گلد کر لاین ترک نوتریشن - 300 گرم",
        image: "/image/amino-powder.webp",
        price: 715000,
        rate: 3.7,
        sender: "digikala",
        amountSold: 82,
        discountDurationHours: 34,
        isAddedToCart: false
    },
];

export default function Products({ cartItem, onAddProduct, productQuantities, onProductQuantityChange }) {
    return (
        <section className="products">
            {products.map((product) => (
                <ProductsItem
                    product={product}
                    cartItem={cartItem}
                    productQuantity={productQuantities[product.id] || 0}
                    onAddProduct={onAddProduct}
                    onProductQuantityChange={onProductQuantityChange}
                    key={product.id}
                />
            ))}
        </section>
    );
}