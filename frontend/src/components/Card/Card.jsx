import "../Card/Card.css/"

function Card() {
    return (
        <div class="card border-0 rounded-0 shadow">
            <img src="..." class="card-img-top rounded-0" alt="..." />
                <div className="card-body mt-3 mb-3">
                    <div class="row">
                        <div class="col-10">
                            <h4 class="card-title">Product title</h4>
                            <p class="card-text">
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                (123)
                            </p>
                        </div>
                        <div class="col-2">
                            <i class="bi bi-bookmark-plus fs-2"></i>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center text-center g-0">
                    <div class="col-4">
                        <h5>$129</h5>
                    </div>
                    <div class="col-8">
                        <a href="#" class="btn btn-dark w-100 p-3 rounded-0 text-warning">ADD TO CART</a>
                    </div>
                </div>
        </div>
    )
}



export default Card