import React from "react";
import { Col, Row } from "antd";

const page_3_img_style = {
  width: "100%",
  height: "60vw ",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  color: "white",
  alignItems: "center",
  justifyContent: "flex-end",
};

const page3_text_Style = {
  fontSize: "64px",
  fontWeight: "400",
  margin: "0px",
  textAlign: "center",
};

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const Page3 = () => (
  <div style={{ marginTop: "60px" }}>
    <Row>
      <Col span={8}>
        <div
          style={{
            background: "#142C64",
            ...page_3_img_style,
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <h1 style={{ fontSize: "64px", marginLeft: "20px" }}>
            Our
            <br />
            Services
          </h1>
          <div>
            <h5 style={{ ...page3_text_Style }}>Assistance</h5>
            <p style={{ textAlign: "center" }}>
              lWe believe in promoting innovative strategies, a multifaceted
              platfrom
            </p>
          </div>
        </div>
      </Col>
      <Col span={8}>
        <div
          style={{
            backgroundImage: `url(${require("../page3_1.jpg")}`,
            ...page_3_img_style,
          }}
        >
          <h5 style={{ ...page3_text_Style }}>startups</h5>
          <p style={{ textAlign: "center" }}>
            lWe believe in promoting innovative strategies, a multifaceted
            platfrom
          </p>
        </div>
      </Col>
      <Col span={8}>
        <div
          style={{
            backgroundImage: `url(${require("../page3_2.jpg")}`,
            ...page_3_img_style,
          }}
        >
          <h5 style={{ ...page3_text_Style }}>Reviews</h5>
          <p style={{ textAlign: "center" }}>
            lWe believe in promoting innovative strategies, a multifaceted
            platfrom
          </p>
        </div>
      </Col>
    </Row>
  </div>
);
export default Page3;