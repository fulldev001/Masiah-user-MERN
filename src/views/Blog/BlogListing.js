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
  Button,
} from 'reactstrap'
import defaultImage from 'assets/img/login.jpg'
import { filepath } from 'config'
import { connect } from 'react-redux'

function BlogListing(props) {
  const { storePosts } = props
  return (
    <>
      <div className="section">
        <Container>
          <Row>
            {storePosts.length > 0
              ? storePosts.map((post, i) => {
                  if (post.status === 1) {
                    return (
                      <Col md={4} key={i}>
                        <Card>
                          <CardImg
                            top
                            src={filepath + post.image}
                            alt="post"
                            className="p-1 border"
                          />
                          <CardBody>
                            <CardSubtitle>
                              {post.parent.name} |{' '}
                              {post.createdAt.split('T')[0]}
                            </CardSubtitle>
                            <CardTitle className="h5 mb-3">
                              {post.title}
                            </CardTitle>
                            <CardText>{post.summary}</CardText>
                          </CardBody>
                        </Card>
                      </Col>
                    )
                  } else {
                    return ''
                  }
                })
              : ''}
          </Row>
        </Container>
      </div>
    </>
  )
}
const mapStateToProps = (state) => ({
  storePosts: state.blog.posts,
})
export default connect(mapStateToProps, {})(BlogListing)
