import React from "react";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import { Quiz } from "../../../app/models/quiz";

interface Props {
  quizzes: Quiz[];
  selectQuiz: (id: number) => void;
}


export default function QuizList({ quizzes, selectQuiz}: Props) {
  return (
    <Segment   horizontal='true'  inverted color="violet" >
      
      
      <Item.Group  font-family="Courier New,monospace"  border='5px' >
        {quizzes.map((quiz) => (
          <Item key={quiz.id}>
            <div className="QuizCards" >
              <Item.Content inverted  >
                
                <div className="container">
                  
                  <Item.Image
                  className="image"
                  size="medium"
                  marginRight="10px"
                  src={`/assets/pictureImages/${quiz.picture}.jpg`}
                  style={{ width: "370px", innerheight:"370px" }}
                  />
                  <div className="overlay">
                    <div className="text">
                      <Item.Description>{quiz.description}</Item.Description>
                    </div>
                  </div>
                </div>
                
              <Item.Header
                as="a">
                <div  className="quiztitle" >
                {quiz.title} 
                </div>
              </Item.Header>
              <Item.Extra fluid margin={0}>
                <Button onClick={() => selectQuiz(quiz.id)}
                fluid
                icon
                labelPosition="right"
                color="pink"
                size="huge"
                
                >
                <Icon name="play"  />
                  Play Quiz
                </Button>
              </Item.Extra>
             </Item.Content>
            </div>
          </Item>
        ))}
      </Item.Group>
     
     
    </Segment>
  );
}
