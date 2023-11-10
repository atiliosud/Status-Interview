import React, { useEffect, useState } from "react";

import {
  CardContainer,
  CardText,
  CardTitle,
  LeftContainer,
  RigthContainer,
  Strong,
} from "./styles";
import { ItemProps } from "../../App";
import StatusCircle from "../StatusCircle";

type Props = {
  item: ItemProps;
};
const formatTime = (time: number) => {
  // Create a Date object using the milliseconds
  const date = new Date(time);

  // Get the date components (year, month, day, hour, minute, second)
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-based, so we add 1
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  // Format the date as a string in the desired format
  const formattedDate = `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
  return formattedDate;
};
const Card: React.FC<Props> = (props) => {
  return (
    <CardContainer>
      <LeftContainer>
        {" "}
        <StatusCircle status={props.item.success} />
        <CardTitle>{props.item.term.toUpperCase()}</CardTitle>
      </LeftContainer>
      <RigthContainer>
        {props.item.success && (
          <CardText>
            <Strong style={{ marginRight: 10 }}>Hostname:</Strong>{" "}
            {props.item.hostname}
          </CardText>
        )}
        {props.item.success && (
          <CardText>
            <Strong style={{ marginRight: 10 }}>Message:</Strong>{" "}
            {props.item.message}
          </CardText>
        )}
        <CardText>
          <Strong style={{ marginRight: 10 }}>Time:</Strong>{" "}
          {formatTime(props.item.time)}
        </CardText>
        <CardText>
          <Strong style={{ marginRight: 10 }}>Status:</Strong>
          <StatusCircle status={props.item.success} />
          <CardText>
            {props.item.success ? "Success" : "Error - OUTAGE"}
          </CardText>
        </CardText>
      </RigthContainer>
    </CardContainer>
  );
};

export default Card;
