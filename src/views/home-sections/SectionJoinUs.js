import { Button, Col, Container, Row } from 'reactstrap';
import defaultImage from 'assets/img/login.jpg';
import teacher1 from 'assets/img/yoga-sm-1.jpg';
import teacher2 from 'assets/img/yoga-sm-2.jpg';
import teacher3 from 'assets/img/yoga-sm-3.jpg';
import teacher4 from 'assets/img/yoga-sm-4.png';

function SectionJoinUs() {
  const joinPurposes = [
    {
      image: teacher1,
      title: 'Need A Yoga Teacher'
    },
    {
      image: teacher2,
      title: 'Need A Yoga Teacher'
    },
    {
      image: teacher3,
      title: 'Need A Yoga Teacher'
    },
    {
      image: teacher4,
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
                alt="big"
              />
            </Col>
            <Col md={6}>
              {joinPurposes.map((purpose, i) => (
                <Row key={i} className="mb-4">
                  <Col md={3}>
                    <img src={purpose.image} alt="Join with" width="100%" className="img-rounded img-responsive" />
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
