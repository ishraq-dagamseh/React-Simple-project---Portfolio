import Card from 'react-bootstrap/Card';

function Skills() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Skills</h1>

      <div className="d-flex justify-content-center gap-4 flex-wrap">
        
        <Card className="bg-dark text-white text-center p-3">
          <Card.Img variant="top" src="Images/PR.png" alt="Programming Languages" />
          <Card.Body>
            <Card.Title><h2>Programming Languages</h2></Card.Title>
            <Card.Text>
              <ul>
                <li className="h5">Python</li>
                <li className="h5">JAVA</li>
                <li className="h5">Javascript</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white text-center p-3">
          <Card.Img variant="top" src="Images/framework1.jpg" alt="Frameworks" />
          <Card.Body>
            <Card.Title><h2>Frameworks</h2></Card.Title>
            <Card.Text>
              <ul>
                <li className="h5">Pandas</li>
                <li className="h5">Numpy</li>
                <li className="h5">Scikit-Learn</li>
                <li className="h5">Matplotlib</li>
                <li className="h5">Seaborn</li>
                <li className="h5">Tensorflow</li>
                <li className="h5">Keras</li>
                <li className="h5">cv2</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white text-center p-3">
          <Card.Img variant="top" src="Images/tools.png" alt="Tools" />
          <Card.Body>
            <Card.Title><h2>Tools</h2></Card.Title>
            <Card.Text>
              <ul>
                <li className="h5">Mendeley Reference Manager</li>
                <li className="h5">MS Office</li>
                <li className="h5">Prezi</li>
                <li className="h5">Canva</li>
                <li className="h5">CVAT - Annotation Tool</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white text-center p-3">
          <Card.Img variant="top" src="Images/platforms.png" alt="Platforms" />
          <Card.Body>
            <Card.Title><h2>Platforms</h2></Card.Title>
            <Card.Text>
              <ul >
                <li className="h5">Jupyter Notebook</li>
                <li className="h5">Visual Studio Code</li>
                <li className="h5">NetBeans</li>
                <li className="h5">Kaggle</li>
                <li className="h5">Spyder</li>
                <li className="h5">GitHub</li>
                <li className="h5">Scratch 3</li>
                <li className="h5">Roboflow</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white text-center p-3">
          <Card.Img variant="top" src="Images/meet.png" alt="Meeting Platforms" />
          <Card.Body>
            <Card.Title><h2>Meeting Platforms</h2></Card.Title>
            <Card.Text>
              <ul >
                <li className="h5">Zoom</li>
                <li className="h5">Microsoft Teams</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white text-center p-3">
          <Card.Img variant="top" src="Images/exp.png" alt="Experience Fields" />
          <Card.Body>
            <Card.Title><h2>Experience Fields</h2></Card.Title>
            <Card.Text>
              <ul >
                <li className="h5">Scientific Research</li>
                <li className="h5">Artificial Intelligence</li>
                <li className="h5">Deep Learning</li>
                <li className="h5">Machine Learning</li>
                <li className="h5">Computer Vision</li>
                <li className="h5">Data Analytics</li>
                <li className="h5">Data Science</li>
                <li className="h5">Programming</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="bg-dark text-white text-center p-3">
          <Card.Img variant="top" src="Images/softskills.jpg" alt="Soft Skills" />
          <Card.Body>
            <Card.Title><h2>Soft Skills</h2></Card.Title>
            <Card.Text>
              <ul>
                <li className="h5">Strong organizational and time-management skills</li>
                <li className="h5">Teamwork and communication skills</li>
                <li className="h5">Ability to work independently and as part of a team</li>
                <li className="h5">Presentation skills</li>
                <li className="h5">Self-learning</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>

      </div>
    </div>
  );
}

export default Skills;
