import { Col, Container, Row } from 'reactstrap';
import defaultImage from 'assets/img/login.jpg';

function SectionAboutUs() {
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="title">About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                pellentesque ex vel mauris gravida dapibus. Praesent posuere
                velit arcu, at viverra arcu porttitor sed. Donec feugiat
                condimentum felis interdum molestie. Sed consequat erat a ipsum
                luctus lacinia. Duis at mattis eros, vel mattis nunc. Vestibulum
                semper, est sed convallis vestibulum, ex justo facilisis diam,
                at elementum elit elit vel ipsum.
              </p>
              <h5 className="title">Mission</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                pellentesque ex vel mauris gravida dapibus. Praesent posuere
                velit arcu, at viverra arcu porttitor sed.
              </p>
            </Col>
            <Col md={6}>
              <Row className="mt-5">
                <Col md={6} className="mb-2">
                  <img
                    src={defaultImage}
                    className="img-responsive img-cover"
                    width="100%"
                    height="160vh"
                  />
                </Col>
                <Col md={6} className="mb-2">
                  <img
                    src={defaultImage}
                    className="img-responsive img-cover"
                    width="100%"
                    height="160vh"
                  />
                </Col>
                <Col md={12}>
                  <img
                    src={defaultImage}
                    className="img-responsive img-cover"
                    width="100%"
                    height="180vh"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionAboutUs;
