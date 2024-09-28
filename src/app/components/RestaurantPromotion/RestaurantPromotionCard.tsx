import { BsStarFill } from "react-icons/bs";
export default function RestaurantPromotionCard() {
    return (
        <div>
            <div className="rp-card">
                <div className="rp-offer-text">
                    ₹100  OFF ABOVE ₹499
                </div>
            </div>
            <div className="rp-product">
                <div className="rp-product-heading">
                    Burger King
                </div>
                <div className="rp-product-ratings">
                    <div className="rp-rating-star"><BsStarFill /></div>
                    <div className="rp-rating-text">4.5</div>
                    <div className="rp-duration-text">• 35-40 mins</div>
                </div>
                <div className="rp-product-subheading">
                    Fast Food, Burger, Beverages<br />
                    Hinjawadi
                </div >
            </div >
        </div>
    );
}
