import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "reactstrap";
import api from "utils/api";

function SectionOurServices() {
  const [services, setServices] = useState([]);
  useEffect(async () => {
    await setServices((await api.get("/services/getAll")).data);
  }, [])
  // const services = [
  //   {
  //     iconName: "wordpress",
  //     title: "Lorem ipsum dolor",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed."
  //   },
  //   {
  //     iconName: "cart-arrow-down",
  //     title: "Consectetur adipiscing",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed."
  //   },
  //   {
  //     iconName: "cloud-download",
  //     title: "Lorem ipsum dolor",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed."
  //   },
  //   {
  //     iconName: "language",
  //     title: "Consectetur adipiscing",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed."
  //   },
  //   {
  //     iconName: "plane",
  //     title: "Lorem ipsum dolor",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed."
  //   },
  //   {
  //     iconName: "pie-chart",
  //     title: "Consectetur adipiscing",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed."
  //   }
  // ];
  return (
    <>
      <div className="section" style={{backgroundColor : "#f8f8f8"}}>
        <Container>
          <h2 className="title text-center">Our Services</h2>
          <Row>
            {
              services.map((service, i) => (
                <Col md={4} key={i} className="mb-5">
                  <Card className="custom-service-iconcard">
                    <p className="text-center cutom-icon-center"><i className={`fa fa-${service.icon} fa-4x`} /></p>
                  </Card>
                  <h4 className="text-center mt-4 mb-2">{service.title}</h4>
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