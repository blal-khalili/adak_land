import "../Navbar/Navbar.css"
import logo from "../../assets/image/OriginLogo/Adack_Land_logo.png"

function Navber() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img classNameName="img-fuild" src={logo} alt="Adack Land" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4 fw-bold">
                        <li className="nav-item dropdown">
                            <a id="Dropdown" className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                دسته بندی ها
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">سورمارکت</a></li>
                                <hr className="dropdown-divider" />
                                <li><a className="dropdown-item" href="#">لوازم جانبی</a></li>
                                <hr className="dropdown-divider" />
                                <li><a className="dropdown-item" href="#">لوازم بهداشتی</a></li>
                                <hr className="dropdown-divider" />
                                <li><a className="dropdown-item" href="#">لوازم تحریر</a></li>
                            </ul>
                        </li>
                        <li className="nav-item1 d-flex">
                            <i className="bi bi-bookmark-heart text-danger"></i>
                            <a className="nav-link active" aria-current="page" href="#">علاقه مندی</a>
                        </li>
                        <li className="nav-item2">
                            <a className="nav-link" href="#"><button classNameName="btn bg-warning rounded"><i className="bi bi-arrow-bar-left px-2"></i>ورود | ثبت نام</button></a>
                        </li>
                        <li className="nav-item3">
                            <a className="nav-link" href="#"><i className="bi bi-cart"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}



export default Navber;