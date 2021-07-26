import { Alert, Col, Container, Row } from 'reactstrap';
import defaultImage from 'assets/img/login.jpg';

function SectionCollaborate() {
  const banners = [
    {
      title: "Become a teacher",
      link: "/"
    },
    {
      title: "Become a therapist",
      link: "/"
    },
    {
      title: "Become a merchant",
      link: "/"
    }
  ];
  return (
    <>
      <div
        className="section section-image"
        style={{
          backgroundImage:
            'url(' + require('assets/img/login.jpg').default + ')'
        }}
      >
        <Container>
          <h2 className="title text-center">Collaborate</h2>
          <Row>
            <Col md={6} className="mb-4">
              <img 
                src={defaultImage}
                className="img-responsive img-cover" 
                width="100%"
                height="350vh"
              />
            </Col>
            <Col md={1}></Col>
            <Col md={5}>
              {
                banners.map((banner, i) => (
                  <div key={i}>
                    <Alert className="custom-alert-dark rounded-0 p-3 text-center custom-alert-fontsize">{banner.title}</Alert>
                    <p className="text-right"><a className="text-light" href={banner.link}>Learn more ?</a></p>
                  </div>
                ))
              }
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionCollaborate;
