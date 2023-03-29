import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPages } from "../../redux/actions";

const Paginate = () => {
  const numberOfPage = useSelector((state) => state.numberOfPage);
  const dispatch = useDispatch();

  return (
    <nav>
      {" "}
      <ul>
        {numberOfPage &&
          [...Array(numberOfPage)].map((element, number) => (
            <button
              onClick={() => {
                dispatch(getPages({sizePage:10, currentPage:number}))
              }}
            >
              {" "}
              {number + 1}{" "}
            </button>
          ))}
      </ul>
    </nav>
  );
};

export default Paginate;