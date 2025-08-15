
import Card from 'react-bootstrap/Card';

function Projects() {
  return(
    <>
          <div className="container my-5">
             <h1 className="text-center mb-4">Projects</h1>

             <div className="d-flex justify-content-center gap-4 flex-wrap">
        
               <Card className="bg-dark text-white text-center p-2">
               <Card.Img variant="top" src="Images/front-end.jpg" alt="websites" />
               <Card.Body>
                  <Card.Title><h3>Web APPs/Front-End projects</h3></Card.Title>
                  <Card.Text>
                    <ul>
                      <li className="h5">historical_jordanian places website using Bootstrap<a href="https://github.com/ishraq-dagamseh/Bootstrap-Task-"></a></li>
                     <li className="h5">list-To-do website <a href="https://github.com/ishraq-dagamseh/JavaScript-Final-Project-List-to-do">View project</a></li>
                     <li className="h5">Portfolio using css <a href="https://github.com/ishraq-dagamseh/Capstone-ProjectCreatePortfolio_"></a></li>
                      <li className="h5">Newspaper website <a href="https://github.com/ishraq-dagamseh/SunriseNewsPaper-website">View project</a></li>

                    </ul>
                  </Card.Text>
               </Card.Body>
               </Card>

              <Card className="bg-dark text-white text-center p-2">
              <Card.Img variant="top" src="Images/AI.jpg" alt="AI" />
              <Card.Body>
                 <Card.Title><h3>AI projects</h3></Card.Title>
                 <Card.Text>
                  <ul>
                    <li className="h5"> Project 1: Historical Places Predictor
                     <a href="https://github.com/ishraq-dagamseh/Deploy-historocal_places_classifier_InGradio">View Project</a></li>
                    <li className="h5"> Project 2: Jordanian Currencies Object Detector System
                      <a href="https://github.com/ishraq-dagamseh/Jordanian-Currency-Detection-using-Roboflow">View project</a></li>
                    <li className="h5"> Project 3: House Price Predictor 
                      <a href="https://www.kaggle.com/competitions/hppbtae/code?competitionId=37839&sortBy=dateRun&tab=profile&excludeNonAccessedDatasources=false">View leaderboard</a></li>
                    <li className="h5"> Project 4: Vehicle Insurance Classifier 
                       <a href="https://www.kaggle.com/competitions/VICBTAE/leaderboard">View leaderboard</a></li>
                    <li className="h5"> Project 5: Malaria Detector
                       <a href=" https://github.com/ishraq-dagamseh/Malaria_Detector">View project</a></li>
                    <li className="h5"> project 6: breast cancer detector 
                      <a href="https://github.com/ishraq-dagamseh/Breast_Cancer">View project</a></li>
           
                    </ul>
                  </Card.Text>
                </Card.Body>
             </Card>

        </div></div>
        
        </>
  );
}

export default Projects;
