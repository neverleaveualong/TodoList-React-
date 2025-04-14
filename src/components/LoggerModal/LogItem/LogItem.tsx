import React from "react";
import { ILogItem } from "../../../types";
import { BsFillPersonFill } from "react-icons/bs";

type TLogItemProps = {
  logItem: ILogItem;
};

const LogItem: FC<TLogItemProps> = ({ logItem }) => {
  let timeOffset = new Date(Date.now() - Number(logItem.logTimestamp));
  console.log("timeOffset", timeOffset);
  console.log("timeOffset.getMinutes()", timeOffset.getMinutes());
  console.log("timeOffset.getSecones()", timeOffset.getSeconds());

  const showOffsetTime = `
  ${timeOffset.getMinutes() > 0 ? `${timeOffset.getMinutes()}m` : ""} 
  ${timeOffset.getSeconds() > 0 ? `${timeOffset.getMinutes()}s ago` : ""}
  ${timeOffset.getSeconds() === 0 ? `just now` : ""}
  `;

  return (
    <div>
      <div>
        <BsFillPersonFill />
        {logItem.logAuthor}
      </div>
      <div>{logItem.logMessage}</div>
      <div>{showOffsetTime}</div>
    </div>
  );
};

export default LogItem;
