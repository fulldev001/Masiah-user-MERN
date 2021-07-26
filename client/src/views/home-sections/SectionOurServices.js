import { Card, Col, Container, Row } from "reactstrap";

function SectionOurServices() {
  const services = [
    {
      iconName: "wordpress",
      title: "Lorem ipsum dolor",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed."
    },
    {
      iconName: "cart-arrow-down",
      title: "Consectetur adipiscing",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed."
    },
    {
      iconName: "cloud-download",
      title: "Lorem ipsum dolor",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed."
    },
    {
      iconName: "language",
      title: "Consectetur adipiscing",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed."
    },
    {
      iconName: "plane",
      title: "Lorem ipsum dolor",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed."
    },
    {
      iconName: "pie-chart",
      title: "Consectetur adipiscing",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed."
    }
  ];
  return (
    <>
      <div className="section">
        <Container>
          <h2 className="title text-center">Our Services</h2>
          <Row>
            {
              services.map((service, i) => (
                <Col md={4} key={i} className="mb-5">
                  <Card className="custom-service-iconcard">
                    <p className="text-center cutom-icon-center"><i className={`fa fa-${service.iconName} fa-4x`} /></p>
                  </Card>
                  <h5 className="text-center mt-4">{service.title}</h5>
                  <p className="text-center">{service.content}</p>
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionOurServices;