import React from "react";
import norecords from "../../assets/NoRecordFound.png";

const NorecordsFound = () => {
  return (
    <div>
      <img src={norecords} alt="No records found" className="mx-80 my-20" />
    </div>
  );
};

export default NorecordsFound;
