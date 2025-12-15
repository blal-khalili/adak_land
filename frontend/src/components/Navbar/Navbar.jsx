import "../Navbar/Navbar.css"
import { Link } from "react-router";

function Navber() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand mt-3" href="#"><h1>آداک لند</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="bi bi-list-stars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="col-md-5">
                        <form className="d-flex">
                            <input className="form-control me-5" type="search" placeholder="جستوجو در آداک لند..." aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">جستوجو</button>
                        </form>
                    </div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-dark mt-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                دسته بندی ها
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <ul>
                                    <li className="dropdown-item text-primary">محصولات</li>
                                    <li><Link to="/supermarket" className="dropdown-item text-dark">سوپرمارکت</Link></li>
                                    <li><Link className="dropdown-item text-dark" href="#">لوازم جانبی موبایل</Link></li>
                                    <li><Link className="dropdown-item text-dark" href="#">لوازم آرایشی و بهداشتی</Link></li>
                                    <li><Link className="dropdown-item text-dark" href="#">لوازم تحریر</Link></li>
                                </ul>
                                <ul>
                                    <li className="dropdown-item text-primary">جزئیات</li>
                                    <li><Link className="dropdown-item text-dark" href="#">تنقلات و غذا...</Link></li>
                                    <li><Link className="dropdown-item text-dark" href="#">موبایل و لپ تاپ...</Link></li>
                                    <li><Link className="dropdown-item text-dark" href="#">دستمال کاغذی و مایع دستشویی...</Link></li>
                                    <li><Link className="dropdown-item text-dark" href="#">کوله پشتی و خودکار...</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item1 d-flex mt-2">
                            <i className="bi bi-bookmark-heart text-danger"></i>
                            <Link className="nav-link text-dark" href="#">علاقه مندی</Link>
                        </li>
                        <li className="nav-item2">
                            <Link className="nav-link" href="#"><button className="bg-primary text-white"><i className="bi bi-arrow-bar-left px-1"></i>ورود | ثبت نام</button></Link>
                        </li>
                        <li className="nav-item2">
                            <Link to="/ContactUs" target="_blank" className="nav-link bg-primary text-white" id="btn-link-ContactUs"><i className="bi bi-person-circle px-1"></i>تماس با ما</Link>
                        </li>
                        <li className="nav-item3">
                            <Link to="/shoppingcart" className="nav-link text-dark"><i className="bi bi-cart"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}



export default Navber;