import "./Checkbox.css"


function CheckBox() {
    return (
        <div class="checkbox-container mx-3">
            <label class="ios-checkbox red">
                <input type="checkbox" />
                <div class="checkbox-wrapper">
                    <div class="checkbox-bg"></div>
                    <svg class="checkbox-icon" viewBox="0 0 24 24" fill="none">
                        <path
                            class="check-path"
                            d="M4 12L10 18L20 6"
                            stroke="currentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </div>
            </label>
        </div>
    )
}



export default CheckBox