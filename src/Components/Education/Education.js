import Card from 'react-bootstrap/Card';

function Education() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Education</h1>

      <div className="d-flex justify-content-center gap-4 flex-wrap">
        <Card className="bg-dark text-white text-center p-3">
          <Card.Img variant="top" src="Images/Master.jpg" alt="Master Degree" />
          <Card.Body>
            <Card.Title><h2>Master of Computer Science</h2> </Card.Title>
            <Card.Text>
              
              <h3>Yarmouk University | Jordan-Irbid | 2022 | GPA: 83.9</h3>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white text-center p-3">
          <Card.Img variant="top" src="Images/Bsc.jpg" alt="Bachelor Degree" />
          <Card.Body>
            <Card.Title> <h2>BSc of Computer Science</h2> </Card.Title>
            <Card.Text>
             
              <h3>Yarmouk University | Jordan-Irbid | 2014 | GPA: 70.8</h3>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Education;
