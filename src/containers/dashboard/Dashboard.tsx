import React from "react";
import { Card, Row, Col } from "antd";
import styled from "styled-components";

const classes = [
  { name: "7-A" },
  { name: "7-B" },
  { name: "8-A" },
  { name: "8-B" },
  { name: "9-A" },
  { name: "10-A" },
  { name: "10-B" },
];

const StyledCard = styled(Card)`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  background-color: #1890ff;
  border-radius: 8px;
  left: 190px;
`;

const Dashboard = () => {
  return (
    <Row gutter={[16, 16]}>
      {classes.map((classItem, index) => (
        <Col xs={24} sm={12} md={8} lg={9} key={index}>
          <StyledCard>{classItem.name}</StyledCard>
        </Col>
      ))}
    </Row>
  );
};

export default Dashboard;
