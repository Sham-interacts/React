import RestaurantCard from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// import resList from "../utils/data.js";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");

    const json = await data.json();
    setListOfRes(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResList(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false) return <h1>Check your internet connection</h1>;


  if (listOfRes.length === 0) {
    return <Shimmer />;
  }

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div
          className="search px-4"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        >
          <input className="border-2" />
          <button
            className="m-4 px-5 py-1 bg-orange-100 rounded-xl"
            onClick={() => {
              const filteredList = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn border  px-2 m-4 bg-gray-100 text-amber-600"
          onClick={() => {
            const filteredList = listOfRes.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredResList(filteredList);
          }}
        >
          Top rated restaurants
        </button>
        <label className="p-2 my-4">User Name:</label>
        <input
          className="border-2 p-2 my-4"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="res-container flex flex-wrap">
        {filteredResList.map((res, index) => (
          <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
            <RestaurantCard objData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
