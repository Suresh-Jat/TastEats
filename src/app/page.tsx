import FoodCategory from "./components/FoodCategory/FoodCategory";
import Header from "./components/Header";
import RestaurantPromotion from "./components/RestaurantPromotion/RestaurantPromotion";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="main-web-container">
        <FoodCategory />
        <RestaurantPromotion />
      </div>
    </div>
  );
}
