import "../Navbar/Navbar.css"
import { Link } from "react-router";


function Navber() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand mt-3" href="#"><h1>آداک لند</h1></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="bi bi-list-stars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="col-md-5">
                        <form class="d-flex">
                            <input class="form-control me-5" type="search" placeholder="جستوجو در آداک لند..." aria-label="Search" />
                            <button class="btn btn-outline-primary" type="submit">جستوجو</button>
                        </form>
                    </div>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-dark mt-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                دسته بندی ها
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <ul>
                                    <li class="dropdown-item text-primary">محصولات</li>
                                    <Link to="/supermarket"><li><a class="dropdown-item text-dark">سوپرمارکت</a></li></Link>
                                    <li><a class="dropdown-item text-dark" href="#">لوازم جانبی موبایل</a></li>
                                    <li><a class="dropdown-item text-dark" href="#">لوازم آرایشی و بهداشتی</a></li>
                                    <li><a class="dropdown-item text-dark" href="#">لوازم تحریر</a></li>
                                </ul>
                                <ul>
                                    <li class="dropdown-item text-primary">جزئیات</li>
                                    <li><a class="dropdown-item text-dark" href="#">تنقلات و غذا...</a></li>
                                    <li><a class="dropdown-item text-dark" href="#">موبایل و لپ تاپ...</a></li>
                                    <li><a class="dropdown-item text-dark" href="#">دستمال کاغذی و مایع دستشویی...</a></li>
                                    <li><a class="dropdown-item text-dark" href="#">کوله پشتی و خودکار...</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item1 d-flex mt-2">
                            <i className="bi bi-bookmark-heart text-danger"></i>
                            <a className="nav-link text-dark" href="#">علاقه مندی</a>
                        </li>
                        <li className="nav-item2">
                            <a className="nav-link" href="#"><button className="bg-primary text-white"><i className="bi bi-arrow-bar-left px-1"></i>ورود | ثبت نام</button></a>
                        </li>
                        <li className="nav-item3">
                            <a className="nav-link text-dark" href="#"><i className="bi bi-cart"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}



export default Navber;