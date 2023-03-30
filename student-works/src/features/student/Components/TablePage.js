import React from "react";
import "../../../App.css";
import TableData from "./TableData";
import FilterGroup from "./FilterGroup";
import FilterTopic from "./FilterTopic";
import AddButton from "./AddButton";
import ResetButton from "./ResetButton";
import LoadButton from "./LoadButton";
import SaveButton from "./SaveButton";
import DeleteButton from "./DeleteButton";

function TablePage() {
  return (
    <>
      <div className="wrapper">
        <div className="buttons">
          <div className="buttons-left">
            <AddButton />
            <FilterGroup />
            <FilterTopic />
            <ResetButton />
          </div>
          <div className="buttons-right">
            <LoadButton />
            <SaveButton />
            <DeleteButton />
          </div>
        </div>
        <TableData />
      </div>
    </>
  );
}

export default TablePage;
