import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
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

  const Deneme = () => {
    console.log("a");
  };

  const data = ["aaa", "bbb", "ccc"];

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
        <Col> {/* <Select options={data}></Select> */}</Col>
      </Row>
    </div>
  );
}

export default App;
