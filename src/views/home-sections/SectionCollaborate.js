import { Alert, Col, Container, Row } from 'reactstrap';
import collaborateImg from 'assets/img/women-girl.png';

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
        className="section py-5 section-image"
        style={{
          backgroundImage:
          'linear-gradient(rgb(211 125 0 / 66%), rgb(0 0 0 / 68%)),url(' + require('assets/img/bg-section.jpg').default + ')'
        }}
      >
        <Container>
          <h2 className="title text-center pb-3">Collaborate</h2>
          <Row>
            <Col md={6} className="mb-4">
              <img 
                src={collaborateImg}
                className="img-responsive img-cover" 
                width="100%"
                height="350vh"
                alt=""
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
