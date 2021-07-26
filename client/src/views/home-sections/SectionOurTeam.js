import { Col, Container, Row } from 'reactstrap';
import BillyAvatar from 'assets/img/faces/Billy.png';
import SimonAvatar from 'assets/img/faces/Simon.png';
import SueAvatar from 'assets/img/faces/Sue.png';
import WendyAvatar from 'assets/img/faces/Wendy.png';

function SectionOurTeam() {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'Director',
      avatar: SimonAvatar,
      linkedinUrl: '/',
      twitterUrl: '/'
    },
    {
      name: 'Mike Doe',
      position: 'Senior Designer',
      avatar: BillyAvatar,
      linkedinUrl: '/',
      twitterUrl: '/'
    },
    {
      name: 'Jane Doe',
      position: 'Senior Designer',
      avatar: WendyAvatar,
      linkedinUrl: '/',
      twitterUrl: '/'
    },
    {
      name: 'Karen Doe',
      position: 'Project Manager',
      avatar: SueAvatar,
      linkedinUrl: '/',
      twitterUrl: '/'
    }
  ];
  return (
    <>
      <div className="section section-lightgreen">
        <Container>
          <h2 className="title text-center">Our Team</h2>
          <Row>
            {teamMembers.map((member, i) => (
              <Col md={3} key={i}>
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={member.avatar}
                />
                <h5 className="text-center">{member.name}</h5>
                <p className="text-center">{member.position}</p>
                <p className="text-center">
                  <a href={member.linkedinUrl} className="text-secondary">
                    <i className="fa fa-linkedin" />
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  <a href={member.twitterUrl} className="text-secondary">
                    <i className="fa fa-twitter" />
                  </a>
                </p>
              </Col>
            ))}
          </Row>
          <p className="text-center"><a href="/">View the team</a></p>
        </Container>
      </div>
    </>
  );
}

export default SectionOurTeam;
