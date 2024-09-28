import RestaurantPromotionCard from "./RestaurantPromotionCard";

export default function RestaurantPromotion() {
    return (
        <div className="restaurant-promotion">
            <div >
                <h1 className="heading-1">Restaurant Promotions</h1>
                <div className="rp-cards">
                    <RestaurantPromotionCard />
                    <RestaurantPromotionCard />
                    <RestaurantPromotionCard />
                    <RestaurantPromotionCard />
                </div>
            </div>
        </div>
    );
}