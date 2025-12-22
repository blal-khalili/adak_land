import CheckBox from "../../components/CheckBox/Checkbox"


function ProductsFilter() {
    return (
        <div className='col-md-9 border border-danger d-grid mx-auto h-50 rounded mt-5 '>
            <h2 className='mt-4 mx-auto'>فیلترها</h2>

            <ul className='mt-5'>
                <li className='d-flex mt-5 justify-content-between'>
                    <h4>تنفلات</h4>
                    <CheckBox />
                </li>

                <hr />

                <li className='d-flex mt-5 justify-content-between'>
                    <h4>لبنیات</h4>
                    <CheckBox />
                </li>

                <hr />

                <li className='d-flex mt-5 justify-content-between'>
                    <h4>نوشیدنی</h4>
                    <CheckBox />
                </li>

                <hr />

                <li className='d-flex mt-5 justify-content-between'>
                    <h4>صبحانه</h4>
                    <CheckBox />
                </li>

                <hr />

                <li className='d-flex mt-5 justify-content-between'>
                    <h4>افزودنی ها</h4>
                    <CheckBox />
                </li>

                <hr />

                <li class="dropdown">
                    <a class="filter-dropdown dropdown-toggle text-dark d-flex gap-3 pt-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <h3>
                            محدودیت قیمت
                        </h3>
                    </a>
                    <ul class="dropdown-menu p-2 pt-4">
                        <p>از 1000000 تا 2000000 تومان</p>
                    </ul>
                </li>
            </ul>
        </div>
    )
}



export default ProductsFilter