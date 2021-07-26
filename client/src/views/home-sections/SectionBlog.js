import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
  Button
} from 'reactstrap';
import defaultImage from 'assets/img/login.jpg';

function SectionBlog() {
  const postInfos = [
    {
      image: defaultImage,
      category: 'Meditate',
      createdAt: '01/20/2020',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed.'
    },
    {
      image: defaultImage,
      category: 'Meditate',
      createdAt: '01/20/2020',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed.'
    },
    {
      image: defaultImage,
      category: 'Meditate',
      createdAt: '01/20/2020',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed.'
    },
    {
      image: defaultImage,
      category: 'Meditate',
      createdAt: '01/20/2020',
      title: 'Lorem ipsum dolor sit amet, consectetur',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque ex vel mauris gravida dapibus. Praesent posuere velit arcu, at viverra arcu porttitor sed.'
    }
  ];
  return (
    <>
      <div className="section">
        <Container>
          <h2 className="title text-center">Blog</h2>
          <Row>
            {postInfos.map((pInfo, i) => (
              <Col md={4} key={i}>
                <Card>
                  <CardImg
                    top
                    src={pInfo.image}
                    alt="post"
                    className="p-1 border"
                  />
                  <CardBody>
                    <CardSubtitle>{pInfo.category} | {pInfo.createdAt}</CardSubtitle>
                    <CardTitle className="h5 mb-3">{ pInfo.title }</CardTitle>
                    <CardText>{pInfo.content}</CardText>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
          <h2 className="text-center"><Button className="rounded-0">View More</Button></h2>
        </Container>
      </div>
    </>
  );
}

export default SectionBlog;
