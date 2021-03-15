/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import axios from "axios";

// Components
import { Button, Select } from "../components/index";

export default function SelectExample() {
  const [options, setOptions] = useState([]);
  const [selectOneItem, setSelectOneItem] = useState({});
  const [selectMultipleItems, setSelectMultipleItems] = useState([]);
  const [selectPlaceholder, setSelectPlaceholder] = useState([]);
  let history = useHistory();

  const getData = async () => {
    const res = await axios.get("https://reqres.in/api/unknown");
    let options = [];
    res.data.data.map((item) =>
      options.push({ value: item.name, label: item.name })
    );
    setOptions(options);
    setSelectOneItem(options[0]);
  };

  useEffect(() => {
    if (options.length === 0) {
      getData();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => history.goBack()}>
          <LeftOutlined /> Back
        </Button>

        <div className="row">
          <div className="column">
            <p className="title">Select (one item)</p>
            <p className="description">
              Select which only allows a unique item selection. For default the{" "}
              <b>multiSelect</b> property has a false value. To use this
              component you will need to set the <b>optionsList</b> property
              with an array of items. Another thing that you could initialize
              the component with the first item of the list, passing to it the{" "}
              <b>valueObj</b> property with the value of the first item.
            </p>
            <Select
              optionsList={options}
              valueObj={selectOneItem}
              handleChange={(value) => setSelectOneItem(value)}
            />
          </div>

          <div className="column">
            <p className="title">Select (multiple items)</p>
            <p className="description">
              Select which allows more than one item selected. You will need to
              change the value of the <b>multiSelect</b> property with a true
              value. Also you can use the <b>closeMenuOnSelect</b> property to
              prevent the listing from closing.
            </p>
            <Select
              optionsList={options}
              valueArr={selectMultipleItems}
              handleChange={(value) => setSelectMultipleItems(value)}
              multiSelect={true}
              closeMenuOnSelect={false}
            />
          </div>
        </div>
        <p className="title">Select placeholder</p>
        <p className="description-row">
          This component can show the placeholder that you want or show the
          default one. In this case the <b>placeholder</b> property is with the
          value "Customize your placeholder". For default, if you do not put any
          value to this property, will show "Select an option".
        </p>
        <Select
          optionsList={options}
          valueArr={selectPlaceholder}
          placeholder="Customize your placeholder"
          handleChange={(value) => setSelectPlaceholder(value)}
          multiSelect={true}
          closeMenuOnSelect={false}
        />

        <pre>
          <p className="codeExample">
            {"<Select \n" +
              "   optionsList={options} \n" +
              "   valueArr={selectPlaceholder} \n" +
              "   placeholder='Customize your placeholder' \n" +
              "   handleChange={(value) => setSelectPlaceholder(value)} \n" +
              "   multiSelect={true} \n" +
              "   closeMenuOnSelect={false} \n" +
              "/>"}
          </p>
        </pre>
      </header>
    </div>
  );
}
