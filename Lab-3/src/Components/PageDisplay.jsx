import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardsDisplay from './CardsDisplay';


function PageDisplay(){
    return(
       <section id="blog" className='block blog-block'>
        <Container fluid>
            <div className='title-holder'>
                <h2>Latest from blog</h2>
                <div className='subtitle'>get our latest news from blog</div>
            </div>
            <Row>
                <Col>1 of 1</Col>
            </Row>
        </Container>
        <CardsDisplay/>
       </section>
);
}

export default PageDisplay
