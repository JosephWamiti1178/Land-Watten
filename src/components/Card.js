import React from "react";
import { CDBCard, CDBCardBody, CDBCardImage, CDBCardTitle, CDBCardText, CDBBtn, CDBContainer } from "cdbreact";

export const Card = () => {
  return (
    <CDBContainer>
          <CDBCard style={{ width: "25rem" }}>
            <CDBCardImage
              className="img-fluid"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            />
            <CDBCardBody>
              <CDBCardTitle>Heading</CDBCardTitle>
              <CDBCardText>Paragraph</CDBCardText>
              <div className="d-flex justify-content-center">
                <CDBBtn color="light" flat block circle>
                  Button
                </CDBBtn>
              </div>
            </CDBCardBody>
          </CDBCard>
          <CDBCard style={{ width: "25rem" }} border>
            <CDBCardImage
              className="img-fluid"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            />
            <CDBCardBody>
              <CDBCardTitle>Heading</CDBCardTitle>
              <CDBCardText>Paragraph</CDBCardText>
              <CDBBtn color="light" flat circle>
                Button
              </CDBBtn>
            </CDBCardBody>
          </CDBCard>
    </CDBContainer>
  );
};