import React, { useState } from "react";
import { cursorTo } from "readline";
import { Button, ButtonGroup,  Card,  Grid, GridColumn,  Icon, Item, Segment } from "semantic-ui-react";
import {   Quiz } from "../../app/models/quiz";




interface Props {
    quiz:Quiz;
    cancelSelectQuiz:() => void;
   
    
}
 
export default function QuizDetails({ quiz,cancelSelectQuiz}:Props) {
  const[showscore ,setShowScore] = useState(false);
  const[score,setScore] = useState(0);
  
  


  function doneshowscore(){
    setShowScore(true);
  }
  
  function clickbuttontest1(answer1 : boolean  ){
    if(answer1 === true){
      setScore(score +1);
    } 
  }

  function clickbuttontest2(answer2 : boolean  ){
    if(answer2 === true){
      setScore(score +1);
      
    } 
  }

  function clickbuttontest3(answer3 : boolean  ){
    
    if(answer3 === true){
      setScore(score +1);
      
    } 
  }
  function clickbuttontest4(answer4 : boolean  ){
   
    if(answer4 === true){
     setScore(score +1);
    } 
  }

  function restartbutton(){
    setScore(0);
  }
  
  
  return (
    
          <Segment  inverted color="violet">
            {
              showscore ? (
                
                 
            <Segment inverted color="violet">
             <Item.Meta><Button className="canclescorecard" onClick={cancelSelectQuiz}  id="canceliconscore" icon>
              <Icon name='cancel' />
             </Button></Item.Meta> 
              <Card fluid className="scorecard" >
              <Card.Content>
                <Card.Header id="cardtitle">Well Done</Card.Header>
              <img  src='/assets/ballons.png'  />
             
                <Card.Description id="carddescrip">
                 You have scored  {score} points
                </Card.Description>
              </Card.Content>

            </Card>
              </Segment>
               
              ) : (
            <>
             <Item.Meta><Button onClick={cancelSelectQuiz} atteched='right' id="cancelicon" icon>
              <Icon name='cancel' />
             </Button></Item.Meta>
            <Item.Header id="quiztitle" font-family="Courier New,monospace" className="QuizTitleSheet" ><h2>{quiz.title}</h2>
            </Item.Header>
            {quiz.questions?.map(question=> (
                <Item key={question.id}>
                  <Item.Content inverted>
                    <Grid  celled="internally" color="purple" id="segborders" >
                      <GridColumn id="segborders" inverted color="purple" width={5} >
                        
                    <Item.Description  >
                       <h3> {question.questionDescription}</h3>
                    </Item.Description>
                    </GridColumn >
                    <GridColumn  id="segborders2" color="purple" width={11}>
                   
                       <ButtonGroup vertical fluid inverted color="violet" >
                         
                      <button 
                      onClick={() =>clickbuttontest1(question.answer1)}  
                      className="QuestionOptionsButton" >
                        <h4>{question.option1} {question.answer1}</h4>
                        </button>
                    
                      <button 
                      onClick={() =>clickbuttontest2(question.answer2 )} 
                     
                      className="QuestionOptionsButton">
                        <h4>{question.option2}  {question.answer2}</h4>
                        </button>
                    
                      <button 
                       onClick={() =>clickbuttontest3(question.answer3)}
                      className="QuestionOptionsButton">
                        <h4>{question.option3}  {question.answer3}</h4>
                        </button>
                     
                      <button 
                       onClick={() =>clickbuttontest4(question.answer4)}
                      className="QuestionOptionsButton">
                        <h4>{question.option4}  {question.answer4}</h4>
                        </button>
                      
                        </ButtonGroup>
                 
                      
                
                </GridColumn>
                </Grid>
                   
                    
                  </Item.Content>
                </Item>
             ))}
              <ButtonGroup fluid >
                <Button onClick={doneshowscore} icon labelPosition='left'   color='blue'size='huge'>
                 <Icon name = 'square full'/>
                  Done
                </Button>
    
                <Button 
                  icon onClick={restartbutton} labelPosition='right'  color='yellow'size='huge'>
                 <Icon name = 'redo'/>
                  Restart
                </Button>

                </ButtonGroup>
                </>
              )
            }
            
        </Segment>
    );
      
}




