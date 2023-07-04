import Card from 'react-bootstrap/Card';

function PostCard(props) {
    
    const {name,title,text}=props;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
        <Card.Text>
          {text}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default PostCard;