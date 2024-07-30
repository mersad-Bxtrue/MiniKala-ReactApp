export default function Navbar({ totalProducts }) {
    return (
        <nav className="navbar-section">
            <div style={{ marginTop: "6px" }}>
                <a href="#nothing" className="logo">
                    minikala
                </a>
            </div>

            <ul className="menu-list">
                <li className="menu-item">
                    <a href="#nothing">لیست محصولات
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#424750" style={{ verticalAlign: "middle" }}><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#nothing">خدمات
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#424750" style={{ verticalAlign: "middle" }}><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#nothing">جشنواره تخفیفات
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#424750" style={{ verticalAlign: "middle" }}><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                    </a>
                </li>
                <li className="menu-item">
                    <a href="#nothing">تماس با ما
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#424750" style={{ verticalAlign: "middle" }}><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                    </a>
                </li>
            </ul>

            <div className="account-access">
                <a href="#nothing" className="login-signin">ورود | ثبت نام</a>
                <a href="#nothing" className="shopping-cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#424750">
                        <path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z"></path>
                        <circle cx="10.5" cy="19.5" r="1.5"></circle>
                        <circle cx="16.5" cy="19.5" r="1.5"></circle>
                    </svg>
                    <span className={`number-of_products ${totalProducts === 0 ? 'hidden' : ''}`}>{totalProducts.toLocaleString("fa-ir")}</span>
                </a>
            </div>
        </nav>
    );
}