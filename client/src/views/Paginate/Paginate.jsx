import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPages } from "../../redux/actions";
import style from "./Paginate.module.css"

const Paginate = () => {
  const numberOfPage = useSelector((state) => state.numberOfPage);
  const dispatch = useDispatch();

  return (
    <nav>
      {" "}
      <ul className={style.container}>
        {numberOfPage &&
          [...Array(numberOfPage)].map((element, number) => (
            <button className={style.buttons}
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