// import "./SearchPage.css";
// import { useEffect, useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { Link } from "react-router";


// function SearchPage() {

//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(false);

//     // گرفتن query از URL
//     const params = new URLSearchParams(window.location.search);
//     const query = params.get("query");

//     useEffect(() => {

//         if (!query) {
//             setProducts([]);
//             return;
//         }

//         const searchProducts = async () => {

//             try {

//                 setLoading(true);

//                 const response = await fetch(
//                     "http://127.0.0.1:8000/products/search/",
//                     {
//                         method: "POST",
//                         headers: {
//                             "Content-Type": "application/json",
//                         },
//                         body: JSON.stringify({
//                             search_input: query,
//                         }),
//                     }
//                 );

//                 const data = await response.json();

//                 console.log("Search result:", data);

//                 if (!response.ok) {
//                     console.error("Search error:", data);
//                     return;
//                 }

//                 setProducts(data);

//             } catch (error) {

//                 console.error("Fetch error:", error);

//             } finally {

//                 setLoading(false);

//             }
//         };

//         searchProducts();

//     }, [query]);



//     return (
//         <section className="search-page">

//             <div className="container">

//                 <div className="row py-5 mt-5">

//                     <div className="col-12 py-5">

//                         {/* عنوان */}
//                         <div className="mb-4">

//                             <div className="search-heading-modern">

//                                 <div className="search-heading-index">
//                                     <FiSearch />
//                                 </div>

//                                 <div className="search-heading-body">

//                                     <span>
//                                         Adak 🛒 Land
//                                     </span>

//                                     <h3>
//                                         نتایج جستجو
//                                     </h3>

//                                 </div>

//                                 <div className="search-heading-decoration">
//                                     <span></span>
//                                     <span></span>
//                                     <span></span>
//                                 </div>

//                             </div>


//                             {query && (
//                                 <div className="search-query-result">

//                                     <span className="search-query-label">
//                                         نتایج برای
//                                     </span>

//                                     <span className="search-query-value">
//                                         {query}
//                                     </span>

//                                 </div>
//                             )}


//                         </div>


//                         {/* Loading */}
//                         {loading && (
//                             <div className="text-center">
//                                 <p>
//                                     در حال جستجو...
//                                 </p>
//                             </div>
//                         )}


//                         {/* No result */}
//                         {!loading && products.length === 0 && query && (
//                             <div className="search-empty-state">

//                                 <div className="search-empty-icon">
//                                     <span>⌕</span>
//                                 </div>

//                                 <div className="search-empty-content">

//                                     <span className="search-empty-label">
//                                         نتیجه‌ای پیدا نشد
//                                     </span>

//                                     <p>
//                                         محصولی با عنوان
//                                         <strong> «{query}» </strong>
//                                         پیدا نشد !!!
//                                     </p>

//                                     <small>
//                                         عبارت جستجو را تغییر دهید و دوباره امتحان کنید.
//                                     </small>

//                                 </div>

//                                 <div className="search-empty-decoration">
//                                     <span></span>
//                                     <span></span>
//                                     <span></span>
//                                 </div>

//                             </div>
//                         )}



//                         {/* Products */}
//                         <div className="row search-products-row">

//                             {products.map((product) => (

//                                 <div
//                                     className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4"
//                                     key={product.id}
//                                 >

//                                     <div className="simple-product-card">

//                                         <div className="simple-product-image">

//                                             {product.image && (
//                                                 <img
//                                                     src={
//                                                         product.image.startsWith("http")
//                                                             ? product.image
//                                                             : `http://127.0.0.1:8000${product.image}`
//                                                     }
//                                                     alt={product.title}
//                                                 />
//                                             )}

//                                         </div>

//                                         <div className="simple-product-info">

//                                             <Link to={`/products/detail/${product.slug}`} href="#" className="link_title">
//                                                 <h5>
//                                                     {product.title}
//                                                 </h5>
//                                             </Link>

//                                             <div className="simple-product-bottom">

//                                                 <div className="simple-product-price">
//                                                     <span>{product.price}</span>
//                                                     <small>تومان</small>
//                                                 </div>

//                                             </div>

//                                         </div>

//                                     </div>

//                                 </div>

//                             ))}

//                         </div>


//                     </div>

//                 </div>

//             </div>

//         </section>
//     );
// }

// export default SearchPage;







import "./SearchPage.css";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router";


function SearchPage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    // گرفتن query از URL با React Router
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const query = params.get("query");


    useEffect(() => {

        // اگر query وجود نداشت
        if (!query || !query.trim()) {
            setProducts([]);
            return;
        }


        const searchProducts = async () => {

            try {

                setLoading(true);

                const response = await fetch(
                    "http://127.0.0.1:8000/products/search/",
                    {
                        method: "POST",

                        headers: {
                            "Content-Type": "application/json",
                        },

                        body: JSON.stringify({
                            search_input: query.trim(),
                        }),
                    }
                );


                const data = await response.json();

                console.log("Search query:", query);
                console.log("Search result:", data);


                if (!response.ok) {

                    console.error("Search error:", data);

                    setProducts([]);

                    return;
                }


                // API باید آرایه برگرداند
                if (Array.isArray(data)) {

                    setProducts(data);

                } else {

                    console.error(
                        "فرمت پاسخ API اشتباه است:",
                        data
                    );

                    setProducts([]);
                }


            } catch (error) {

                console.error("Fetch error:", error);

                setProducts([]);

            } finally {

                setLoading(false);

            }

        };


        searchProducts();

    }, [query]);


    return (

        <section className="search-page">

            <div className="container">

                <div className="row py-5 mt-5">

                    <div className="col-12 py-5">



                        {/* HEADER */}

                        <div className="mb-4">

                            <div className="search-heading-modern">


                                <div className="search-heading-index">

                                    <FiSearch />

                                </div>


                                <div className="search-heading-body">

                                    <span>
                                        Adak 🛒 Land
                                    </span>

                                    <h3>
                                        نتایج جستجو
                                    </h3>

                                </div>


                                <div className="search-heading-decoration">

                                    <span></span>
                                    <span></span>
                                    <span></span>

                                </div>


                            </div>


                            {/* عبارت جستجو */}

                            {query && (

                                <div className="search-query-result">

                                    <span className="search-query-label">
                                        نتایج برای
                                    </span>


                                    <span className="search-query-value">
                                        {query}
                                    </span>

                                </div>

                            )}


                        </div>



                        {/* LOADING */}

                        {loading && (

                            <div className="text-center">

                                <p>
                                    در حال جستجو...
                                </p>

                            </div>

                        )}




                        {/* NO RESULT */}

                        {!loading &&
                            products.length === 0 &&
                            query && (

                                <div className="search-empty-state">


                                    <div className="search-empty-icon">

                                        <span>
                                            ⌕
                                        </span>

                                    </div>


                                    <div className="search-empty-content">


                                        <span className="search-empty-label">

                                            نتیجه‌ای پیدا نشد

                                        </span>


                                        <p>

                                            محصولی با عنوان

                                            <strong>
                                                «{query}»
                                            </strong>

                                            پیدا نشد !!!

                                        </p>


                                        <small>

                                            عبارت جستجو را تغییر دهید
                                            و دوباره امتحان کنید.

                                        </small>


                                    </div>


                                    <div className="search-empty-decoration">

                                        <span></span>
                                        <span></span>
                                        <span></span>

                                    </div>


                                </div>

                            )}



                        {/* PRODUCTS */}

                        <div className="row search-products-row">


                            {products.map((product, index) => (

                                <div
                                    className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-4"
                                    key={product.id || index}
                                >


                                    <div className="simple-product-card">


                                        {/* IMAGE */}

                                        <div className="simple-product-image">

                                            {product.image && (

                                                <img
                                                    src={
                                                        product.image.startsWith("http")
                                                            ? product.image
                                                            : `http://127.0.0.1:8000${product.image}`
                                                    }
                                                    alt={product.title}
                                                />

                                            )}

                                        </div>



                                        {/* INFO */}

                                        <div className="simple-product-info">


                                            {/* TITLE */}

                                            <Link
                                                to={`/products/detail/${product.slug}`}
                                                className="link_title"
                                            >

                                                <h5>
                                                    {product.title}
                                                </h5>

                                            </Link>



                                            {/* PRICE */}

                                            <div className="simple-product-bottom">

                                                <div className="simple-product-price">

                                                    <span>
                                                        {product.price}
                                                    </span>

                                                    <small>
                                                        تومان
                                                    </small>

                                                </div>

                                            </div>


                                        </div>


                                    </div>


                                </div>

                            ))}


                        </div>


                    </div>

                </div>

            </div>

        </section>

    );

}


export default SearchPage;
