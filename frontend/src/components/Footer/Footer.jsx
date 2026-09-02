import "../Footer/Footer.css/"
import { Link } from "react-router";


function Footer() {
    return (
        <footer className="text-dark pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mt-5">
                        <h2>آداک لند</h2>

                        <p className="mt-4">به آداک لند خوش آمدید از خریدتان در این فروشگاه لذت ببرید.</p>

                        <p>09142137122</p>
                        <p>Adack Land@gamil.com</p>

                        <div className="nav-item2">
                            {/* <Link to="/ContactUs" target="_blank" className="nav-link bg-primary text-white" id="btn-link-ContactUs"><i className="bi bi-person-circle px-1"></i>تماس با ما</Link> */}
                            <Link
                                to="/ContactUs"
                                className="nav-link"
                                id="btn-link-ContactUs_id"
                                href="#"
                            >
                                <button className="bg-primary text-white">
                                    <i className="bi bi-person-circle px-1"></i>تماس با ما
                                </button>
                            </Link>
                        </div>

                        <div id="Social" className="d-flex gap-3">
                            <Link >
                                <i className="bi bi-google"></i>
                            </Link>

                            <Link >
                                <i className="bi bi-instagram"></i>
                            </Link>

                            <Link >
                                <i className="bi bi-facebook"></i>
                            </Link>

                            <Link >
                                <i className="bi bi-telegram"></i>
                            </Link>
                        </div>
                    </div>

                    <div id="Menu" className="col-md-2 mt-5 col-6">
                        <h2 className="pb-3">منو</h2>

                        <Link className="footer_link_menu" to="/">
                            <p className="text-dark">خانه</p>
                        </Link>

                        <Link className="footer_link_menu">
                            <p className="text-dark">داغ ترین ها</p>
                        </Link>

                        <Link className="footer_link_menu">
                            <p className="text-dark">جدید ترین ها</p>
                        </Link>

                        <Link className="footer_link_menu">
                            <p className="text-dark">پر فروش ترین ها</p>
                        </Link>
                    </div>
                    <div id="More" className="col-md-2 mt-5 col-6">
                        <h2 className="pb-3">بیشتر</h2>

                        <Link className="footer_link_more">
                            <p className="text-dark">سوالی دارید؟</p>
                        </Link>

                        <Link className="footer_link_more">
                            <p className="text-dark">راهنمایی</p>
                        </Link>
                    </div>
                    <div id="Category" className="col-md-3 mt-5 col-6">
                        <h2 className="pb-3">دسته بندی ها</h2>

                        <Link className="footer_link_Categories" to="/supermarket">
                            <p className="text-dark">سورمارکت</p>
                        </Link>

                        <Link className="footer_link_Categories" to={"/Stationery"}>
                            <p className="text-dark">لوازم تحریر</p>
                        </Link>

                        <Link className="footer_link_Categories" to={"/MobileAccessories"}>
                            <p className="text-dark">لوازم جانبی موبایل</p>
                        </Link>

                        <Link className="footer_link_Categories" to={"/Cosmetics"}>
                            <p className="text-dark">لوازم آرایشی و بهداشتی</p>
                        </Link>
                    </div>

                    <hr />

                    <div className="col-md-6">2025 © تمامی حقوق محفوظ است. آداک لند </div>
                    <div className="col-md-6">شرایط استفاده | سیاست حفظ حریم خصوصی</div>
                </div>
            </div>
        </footer>
    )
}



export default Footer;