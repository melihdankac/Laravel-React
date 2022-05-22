import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, Component } from "react";

import Select from "react-select";
import {
  Button,
  Input,
  InputGroup,
  Col,
  Row,
  FormGroup,
  Label,
  // Select,
} from "reactstrap";

function App() {
  const [name, setName] = useState([]);
  const [surname, setSurname] = useState([]);
  const [phone, setPhone] = useState([]);
  const [email, setEmail] = useState([]);
  const [rastgele, setRastgele] = useState([]);

  const Deneme = () => {
    console.log("a");
  };

  const options = [
    { id: "chocolate", text: "Chocolate" },
    { id: "strawberry", text: "Strawberry" },
    { id: "vanilla", text: "Vanilla" },
  ];

  return (
    <div className="App">
      <Row>
        <Col>
          <FormGroup className="mt-3">
            <Label for="name">Name</Label>
            <Input id="name" name="name" placeholder="Name" />

            <Label for="surname" className="mt-5">
              Surname
            </Label>
            <Input id="surname" name="surname" placeholder="Surname" />

            <Label for="email" className="mt-5">
              Email
            </Label>

            <Input id="email" name="email" placeholder="Email" />

            <Label for="deneme" className="mt-5">
              Deneme
            </Label>
            <InputGroup>
              <Input placeholder="Deneme" name="deneme" id="deneme" />
              <Button type="submit">Save</Button>
            </InputGroup>
          </FormGroup>
        </Col>

        <Col>
          <FormGroup className="mt-3">
            <Label for="rastgele">Rastgele</Label>
            <Select
              id="rastgele"
              name="rastgele"
              placeholder="rastgele"
              getOptionLabel={(row) => row.text}
              getOptionValue={(row) => row.id}
              options={options}
              value={rastgele}
              onChange={(e) => setRastgele(e)}
            />
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
}

export default App;
