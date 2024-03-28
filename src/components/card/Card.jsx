import React, { useState } from "react";
import { Col, Container, Form, Row, Card, Button } from "react-bootstrap";

const LegendCard = ({ legend }) => {
  const [show, setShow] = useState(false);

  return (
    <Col
      key={legend.id}
      onClick={() => setShow(!show)}
      style={{ cursor: "pointer", height: "500px" }}
      xs={10}
      sm={8}
      md={6}
      lg={4}
      xl={3}
    >
      {/* xs={10} sm={8} md={6} lg={4} xl={3} */}
      <Card className="bg-success text-white ">
        {!show ? (
          <>
            <Card.Img
              variant="top"
              src={legend.img}
              style={{ height: "450px", width: "100%", objectFit: "cover" }}
            /> 
              <Card.Title className="pt-2 text-center">{legend.name}</Card.Title>

          </>
        ) : (
          <>
            <Card.Body style={{height:"500px"}} className="d-flex flex-column align-items-start justify-content-center ps-5">
              <Card.Title>{legend.name}</Card.Title>

              <ul>
                {legend.statistics.map((item) => (
                  <li key={item} className="list-unstyled h5 text-start">
                    ⚽️ {item}
                  </li>
                ))}
              </ul>
              <span>{legend.official_career}</span>
            </Card.Body>
          </>
        )}
      </Card>
    </Col>
  );
};

export default LegendCard;
