import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";
import DeleteButton from "./iconButton/deleteButton";

function RadioOptionEditor(props) {
  return (
    <React.Fragment>
      <Radio disabled></Radio>
      <TextField placeholder="Type something..." onChange={props.onChange} />
    </React.Fragment>
  );
}

export default function DynamicRadio(props) {
  var [data, setData] = useState(props.data);

  function onAdd(e) {
    setData([...data, { id: data.length }]);
  }

  function onChange(e) {
    console.log(e);
  }

  function onRemove(e, index) {
    setData(data.filter((i) => i.id !== index));
  }

  return (
    <React.Fragment>
      {data.map((item, index) => {
        return (
          <div>
            <RadioOptionEditor onChange={onChange} />
            <DeleteButton onClick={(e) => onRemove(e, item.id)} />
          </div>
        );
      })}
      <input type="button" value="Add" onClick={onAdd} />
    </React.Fragment>
  );
}
