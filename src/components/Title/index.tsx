import React from "react";

type TitleParams = {
  title: string;
};

const Title = ({ title }: TitleParams) => {
  return <h1>{title}</h1>;
};

export default Title;
