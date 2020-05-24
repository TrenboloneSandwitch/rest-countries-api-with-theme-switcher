import React, { useState } from "react";
import { useParams } from "@reach/router";

const Detail = () => {
  const { alpha3Code } = useParams();
  return (
    <div>
      <h2>Detail {alpha3Code}</h2>
    </div>
  );
};

export default Detail;
