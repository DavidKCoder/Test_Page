import React from "react";
import Block from "../Block/Block";
import style from "./MyBlock.module.css";

const MyBlock = () => {
  return (
    <div className={style.block}>
      <Block post="In today’s episode we have collected the very best from the interviews we’ve done with founders in 2019." />
      <Block post="In today’s episode we have collected the very best ..." />
      <Block post="In today’s episode we have collected the very best from the interviews we’ve done with founders in 2019." />
      <Block post="In today’s episode we have collected the very best ..." />
      <Block post="In today’s episode we have collected the very best from the interviews we’ve done with founders in 2019." />
      <Block post="In today’s episode we have collected the very best from the interviews we’ve done with founders in 2019." />
    </div>
  );
};

export default MyBlock;
