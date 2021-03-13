/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import axios from "axios";

// Components
import { Button, Autocomplete } from "../components/index";

export default function AutocompleteExample() {
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");
  let history = useHistory();

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    let options = [];
    res.data.map((item) => options.push(item.name));
    setOptions(options);
  };

  useEffect(() => {
    if (options.length === 0) {
      getData();
    }
  });

  const handleSelect = (value) => {
    setInput(value);
  };

  const handleSubmit = (value) => {
    setInput(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => history.goBack()}>
          <LeftOutlined /> Back
        </Button>

        <p className="title">Autocomplete</p>
        <p className="description-row">
          This component makes predictions when the user is typing into the
          input and shows the options that contains what the user wrote. You can
          click the option that are you looking for, this will replace what you
          wrote to the option value. There is a button that you can click it to
          trigger an action. You will need to provide all the options to{" "}
          <b>options</b> property.
        </p>
        <Autocomplete
          options={options}
          onSelect={handleSelect}
          onSubmit={handleSubmit}
          userInput={input}
        />

        {input !== "" ? <p>You are trying to search "{input}"</p> : null}
      </header>
    </div>
  );
}
