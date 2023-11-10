import React, { useEffect, useState } from "react";

import { Circle } from "./styles";

type Props = {
  status: boolean;
};
const StatusCircle: React.FC<Props> = (props) => {
  return <Circle status={props.status} />;
};

export default StatusCircle;
