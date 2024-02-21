import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Landing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");

  useEffect(() => {}, [name]);

  return <div>Hi {name}</div>;
};

export default Landing;
