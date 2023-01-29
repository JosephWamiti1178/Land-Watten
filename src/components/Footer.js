import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./Main/FooterStyles";
  
const Footer = () => {
  return (
    <footer>
     <div className="container-fluid">
      <Box>
    
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Watten Developers And Consortium Limited
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Management</FooterLink>
            <FooterLink href="#">Why us</FooterLink>
            {/* <FooterLink href="#">Testimonials</FooterLink> */}
          </Column>
          <Column>
            <Heading>Selling Lands</Heading>
            <FooterLink href="#">Plots in SweetWaters</FooterLink>
            <FooterLink href="#">Plots in Ndrukuma</FooterLink>
            <FooterLink href="#">Plots in Mirera</FooterLink>
            <FooterLink href="#">Plots in Matanya</FooterLink>
          </Column>
          {/* <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column> */}
          <Column>
            <Heading>Enquiries</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fa fa-envelope" aria-hidden="true">
                <span style={{ marginLeft: "10px" }}>
                  Gmail
                </span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <Heading>Location</Heading>
            <FooterLink href="#">
            <i className="fa fa-location-arrow">
                <span style={{ marginLeft: "10px" }}>
                  Nanyuki, Professional Center, 1st floor
                </span>
              </i>

            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
    </div>
     </footer>
  );
};
export default Footer;

