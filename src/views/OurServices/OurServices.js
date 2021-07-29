import React, { useEffect, useState } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardImgOverlay,
} from 'reactstrap'
import PageHeader from 'components/Headers/PageHeader.js'
import blog1Img from 'assets/img/yoga-sm-1.jpg'
import blog2Img from 'assets/img/yoga-sm-2.jpg'
import blog3Img from 'assets/img/pregnant-women.png'
import blog4Img from 'assets/img/yoga-sm-4.png'
import api from 'utils/api'
import { filepath } from 'config'

function OurServices() {
  const [healthyLifes, setHealthyLifes] = useState([])
  useEffect(async () => {
    await setHealthyLifes((await api.get('/healthyLifes/getAll')).data)
  })

  // const serviceData = [
  //   {
  //     image: blog1Img,
  //     title: 'Health Yoga Class',
  //     content:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed.',
  //   },
  //   {
  //     image: blog2Img,
  //     title: 'Power Yoga',
  //     content:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed.',
  //   },
  //   {
  //     image: blog3Img,
  //     title: 'Pregnancy Yoga',
  //     content:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed.',
  //   },
  //   {
  //     image: blog4Img,
  //     title: 'Corporate Yoga',
  //     content:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed.',
  //   },
  //   {
  //     image: blog4Img,
  //     title: 'Dynamic Meditation',
  //     content:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed.',
  //   },
  // ]

  return (
    <>
      <PageHeader title="Services" />
      <div className="main">
        <Container className="services-list">
          <Row>
            <Col>
              <h2 className="title text-center my-5">Healthy Life</h2>
            </Col>
          </Row>
          <Row>
            {healthyLifes.map((service, i) => (
              <Col md={4} key={i}>
                <Card inverse>
                  <CardImg
                    width="100%"
                    src={filepath + service.image}
                    alt="Card image cap"
                  />
                  <CardImgOverlay>
                    <CardTitle className="text-white" tag="h5">
                      {service.title}
                    </CardTitle>
                    <CardText>{service.content}</CardText>
                  </CardImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default OurServices
