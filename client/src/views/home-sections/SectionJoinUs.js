import { Button, Col, Container, Row } from 'reactstrap';
import defaultImage from 'assets/img/login.jpg';

function SectionJoinUs() {
  const joinPurposes = [
    {
      image: defaultImage,
      title: 'Need A Yoga Teacher'
    },
    {
      image: defaultImage,
      title: 'Need A Yoga Teacher'
    },
    {
      image: defaultImage,
      title: 'Need A Yoga Teacher'
    },
    {
      image: defaultImage,
      title: 'Need A Yoga Teacher'
    }
  ];
  return (
    <>
      <div className="section custom-section-lightgrey">
        <Container>
          <h2 className="text-center title">Join Us</h2>
          <Row>
            <Col md={6} className="mb-4">
              <img
                src={defaultImage}
                width="100%"
                height="350vh"
                className="img-cover"
              />
            </Col>
            <Col md={6}>
              {joinPurposes.map((purpose, i) => (
                <Row key={i} className="mb-4">
                  <Col md={3}>
                    <img src={purpose.image} width="100%" className="img-rounded img-responsive" />
                  </Col>
                  <Col md={6}>
                    <h4 className="text-center mb-2 mt-3">{purpose.title}</h4>
                  </Col>
                  <Col md={1} />
                  <Col md={2}>
                    <p className="text-center"><Button className="custom-v-center">Apply</Button></p>
                  </Col>
                </Row>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionJoinUs;
