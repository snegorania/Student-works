import React from "react";
import TableData from "./TableData";
import FilterGroup from "./FilterGroup";
import FilterTopic from "./FilterTopic";
import AddButton from "./AddButton";
import ResetButton from "./ResetButton";
import LoadButton from "./LoadButton";
import SaveButton from "./SaveButton";
import DeleteButton from "./DeleteButton";
import RowSearch from "./RowSearch";
import Paggination from "./Paggination";
import "../style/buttons.css";

function TablePage() {
  return (
    <div>
      <RowSearch />
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
      <Paggination />
    </div>
  );
}

export default TablePage;
