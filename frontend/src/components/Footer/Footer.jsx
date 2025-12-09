import "../Footer/Footer.css/"


function Footer() {
    return (
        <footer className="text-dark pb-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mt-5">
                        <h2>آداک لند</h2>

                        <p className="mt-4">به آداک لند خوش آمدید از خریدتان در این فروشگاه لذت ببرید.</p>

                        <p>09147917122</p>
                        <p>Adack Land@gamil.com</p>

                        <div id="Social" className="d-flex gap-3">
                            <a href="">
                                <i class="bi bi-google"></i>
                            </a>

                            <a href="">
                                <i class="bi bi-instagram"></i>
                            </a>

                            <a href="">
                                <i class="bi bi-facebook"></i>
                            </a>

                            <a href="">
                                <i class="bi bi-telegram"></i>
                            </a>
                        </div>
                    </div>

                    <div id="Menu" className="col-md-2 mt-5 col-6">
                        <h2 className="pb-3">منو</h2>

                        <a href="">
                            <p>خانه</p>
                        </a>

                        <a href="">
                            <p>داغ ترین ها</p>
                        </a>

                        <a href="">
                            <p>جدید ترین ها</p>
                        </a>

                        <a href="">
                            <p>پر فروش ترین ها</p>
                        </a>
                    </div>
                    <div id="More" className="col-md-2 mt-5 col-6">
                        <h2 className="pb-3">بیشتر</h2>

                        <a href="">
                            <p>سوالی دارید؟</p>
                        </a>

                        <a href="">
                            <p>راهنمایی</p>
                        </a>
                    </div>
                    <div id="Category" className="col-md-3 mt-5 col-6">
                        <h2 className="pb-3">دسته بندی ها</h2>

                        <a href="">
                            <p>سورمارکت</p>
                        </a>

                        <a href="">
                            <p>لوازم تحریر</p>
                        </a>

                        <a href="">
                            <p>لوازم جانبی موبایل</p>
                        </a>

                        <a href="">
                            <p>لوازم آرایشی و بهداشتی</p>
                        </a>
                    </div>

                    <hr />

                    <div className="col-md-6">2025 © تمامی حقوق محفوظ است. آداک لند </div>
                    <div className="col-md-6">شرایط استفاده | سیاست حفظ حریم خصوصی</div>
                </div>
            </div>
        </footer>
    )
}



export default Footer