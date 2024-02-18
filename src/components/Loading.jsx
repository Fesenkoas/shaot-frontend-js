import React from "react";
import s from "../css_module/loading.module.css";

export const Loading = () => {
  return (
    <div className={s.main}>
      <div className={s.circ}>
        <div className={s.load}>Loading . . . </div>
        <div className={s.hands}></div>
        <div className={s.body}></div>
        <div className={s.head}>
          <div className={s.eye}></div>
        </div>
      </div>
    </div>
  );
};
