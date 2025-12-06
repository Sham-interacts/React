import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const response = await fetch(
      `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`
    );
    const json = await response.json();
    setResInfo(json?.data?.cards);
    // setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  };

  // console.log("resInfo", resInfo);

  if (resInfo === null) return <Shimmer />;

  const MENU_TYPE =
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

  const cards = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
  // console.log("cards", cards);
  const categories = cards.filter((c) => c.card?.card?.["@type"] === MENU_TYPE);
  // console.log("catz", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl my-6">
        {resInfo[2]?.card?.card?.info?.name}
      </h1>
      {categories.map((c, i) => (
        <RestaurantCategory
          key={i}
          data={c?.card?.card}
          showItems={i === showIndex ? true : false}
          setShowIndex={() => setShowIndex(i)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
