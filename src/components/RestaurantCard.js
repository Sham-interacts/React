const RestaurantCard = ({objData}) => {
  const {name, cuisines, costForTwo, avgRating,cloudinaryImageId,sla} = objData?.info;

  return (
    <div className=" w-80 bg-gray-100 hover:bg-gray-200 p-4 m-3">
      <img
        className="res-logo rounded-2xl"
        alt="rest-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
      />
      <h3 className="py-1 text-xl font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;