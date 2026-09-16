import './Checkout.css'

function Checkout() {
    return (
        <section>
            <div className="container">
                <div className="row py-5 mt-5">
                    <div className="receipt-page py-5 mt-5">
                        <div className="transaction-receipt">

                            {/* <img
                                src={Logo_Adack_Land}
                                className="receipt-logo"
                                alt="Logo"
                            /> */}

                            <div className="success-icon">
                                ✓
                            </div>

                            <h4 className="receipt-title mt-4">
                                تراکنش با موفقیت انجام شد
                            </h4>

                            <p className="receipt-subtitle mt-4">
                                رسید پرداخت شما با موفقیت ثبت شد
                            </p>

                            <div className="receipt-divider"></div>

                            <div className="receipt-row">
                                <span>مبلغ تراکنش</span>
                                <strong>۱,۵۰۰,۰۰۰ تومان</strong>
                            </div>

                            <div className="receipt-row">
                                <span>عنوان</span>
                                <strong>انتقال وجه کارت به کارت</strong>
                            </div>

                            <div className="receipt-row">
                                <span>شماره پیگیری</span>
                                <strong>۸۴۵۲۳۶۹۱</strong>
                            </div>

                            <div className="receipt-row">
                                <span>شماره تراکنش</span>
                                <strong>TRX-458963214</strong>
                            </div>

                            <div className="receipt-row">
                                <span>تاریخ</span>
                                <strong>۱۴۰۴/۰۶/۲۵</strong>
                            </div>

                            <div className="receipt-row">
                                <span>ساعت</span>
                                <strong>۱۴:۳۵:۲۲</strong>
                            </div>

                            <div className="receipt-row">
                                <span>کارت پرداخت</span>
                                <strong>**** **** **** ۱۲۳۴</strong>
                            </div>

                            <div className="receipt-row">
                                <span>نام صاحب کارت مقصد</span>
                                <strong>********</strong>
                            </div>

                            <div className="receipt-row">
                                <span>بانک مقصد</span>
                                <strong>**** بانک</strong>
                            </div>

                            <div className="receipt-row">
                                <span>بانک مبدا</span>
                                <strong>**** بانک</strong>
                            </div>

                            <div className="receipt-row">
                                <span>نام صاحب کارت مبدا</span>
                                <strong>********</strong>
                            </div>

                            <div className="receipt-divider"></div>

                            <div className="receipt-status">
                                <span className="status-dot"></span>
                                پرداخت موفق
                            </div>

                            <button
                                type="button"
                                className="receipt-button"
                                onClick={() => window.print()}
                            >
                                چاپ رسید
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}


export default Checkout;