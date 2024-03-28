import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";

import { data } from "../../helpers/data.js";

import LegendCard from "../card/Card.jsx";

const LegendsContainer = () => { 
  const [inputValue, setInputValue] = useState("");
  const [datam, setDatam] = useState(data);

  const handleChange = (e) => {
    setInputValue(e.target.value);

  };

  useEffect(()=>{
    setDatam(
      data.filter((item) =>
        item.name.toLowerCase().includes(inputValue.toLowerCase().trim())
      )
    );

  },[inputValue])

  return (
    <div className="my-4">
      <Form.Control
        type="text"
        placeholder="Seach Legends..."
        onChange={handleChange}
        value={inputValue}
        className="bg-warning text-success border-0" 
      />
      <Container>
        {/* xs={1} sm={1} md={2} lg={3} */}
        <Row className="row-gap-3 my-4">
          {datam.map((legend) => (
            <LegendCard key={legend.id} legend={legend} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendsContainer;
