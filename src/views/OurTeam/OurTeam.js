import React, { useEffect, useState } from 'react'
import PageHeader from 'components/Headers/PageHeader.js'
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardLink,
  CardSubtitle,
} from 'reactstrap'
import BillyAvatar from 'assets/img/faces/Billy.png'
import SimonAvatar from 'assets/img/faces/Simon.png'
import SueAvatar from 'assets/img/faces/Sue.png'
import WendyAvatar from 'assets/img/faces/Wendy.png'
import api from 'utils/api'
import { filepath } from 'config'

function OurTeam() {
  const [members, setMembers] = useState([])
  useEffect(async () => {
    await setMembers((await api.get('/teamMembers/getAll')).data)
  }, [])
  // const teamMember = [
  //   {
  //     name: 'John Doe',
  //     position: 'Director',
  //     avatar: SimonAvatar,
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  //     linkedinUrl: '/',
  //     twitterUrl: '/',
  //   },
  //   {
  //     name: 'Mike Doe',
  //     position: 'Senior Designer',
  //     avatar: BillyAvatar,
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  //     linkedinUrl: '/',
  //     twitterUrl: '/',
  //   },
  //   {
  //     name: 'Jane Doe',
  //     position: 'Senior Designer',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  //     avatar: WendyAvatar,
  //     linkedinUrl: '/',
  //     twitterUrl: '/',
  //   },
  //   {
  //     name: 'Karen Doe',
  //     position: 'Project Manager',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  //     avatar: SueAvatar,
  //     linkedinUrl: '/',
  //     twitterUrl: '/',
  //   },
  // ]
  return (
    <>
      <PageHeader title="Our Team" />
      <div class="main">
        <Container>
          <Row>
            <Col md={8} className="mx-auto text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="title text-center my-5">Meet Our Staff</h2>
            </Col>
          </Row>
          <Row>
            {members.map((member, i) => (
              <Col md={4} key="i">
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={filepath + member.avatar}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{member.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {member.position}
                    </CardSubtitle>
                    <CardText>{member.description}</CardText>
                    <CardLink href={member.linkedinUrl}>
                      <i className="fa fa-linkedin" />
                    </CardLink>
                    <CardLink href={member.twitterUrl}>
                      <i className="fa fa-twitter" />
                    </CardLink>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default OurTeam
