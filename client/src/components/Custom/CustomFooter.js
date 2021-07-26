import { Button, Col, Container, Input, Row } from "reactstrap";

function CustomFooter () {
  return (
    <>
      <div className="section custom-section-footer">
        <Container>
          <Row>
            <Col md={5}>
              <h2 className="title text-light">Contact Info</h2>
              <h2 className="title custom-text-secondary mb-2">Masiaha</h2>
              <p className="custom-text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed. Donec feugiat condimentum felis interdum molestie. Sed consequat erat a ipsum luctus lacinia. Duis at mattis eros, vel mattis nunc. Vestibulum semper, est sed convallis vestibulum, ex justo facilisis diam, at elementum</p>
              <p className="mt-5">
                <a href="/" className="custom-text-secondary"><i className="fa fa-facebook" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/" className="custom-text-secondary"><i className="fa fa-twitter" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/" className="custom-text-secondary"><i className="fa fa-instagram" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="/" className="custom-text-secondary"><i className="fa fa-linkedin" /></a>
              </p>
            </Col>
            <Col md={3}>
              <h3 className="title text-light">Get In Touch</h3>
              <h5 className="text-light"><i className="fa fa-map-marker" />&nbsp;&nbsp;&nbsp; Address</h5>
              <p className="custom-text-secondary">4321 California St, San Francisco, CA 12345</p>

              <h5 className="text-light mt-3"><i className="fa fa-phone" />&nbsp;&nbsp;&nbsp; Phone</h5>
              <p className="custom-text-secondary">+1 123456 1234</p>

              <h5 className="text-light mt-3"><i className="fa fa-envelope-o" />&nbsp;&nbsp;&nbsp; Email</h5>
              <p className="custom-text-secondary">info@company.com</p>

              <Row className="mt-5">
                <Col md={6} className="mb-3">
                  <Input type="text" placeholder="Name" />
                </Col>
                <Col md={6} className="mb-3"><Input type="text" /></Col>
                <Col md={12}>
                  <Input type="textarea" placeholder="Message" rows={4} />
                </Col>
                <Col md={12} className="mt-5"><Button color="dark" className="btn-round" outline>Send</Button></Col>
              </Row>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CustomFooter;