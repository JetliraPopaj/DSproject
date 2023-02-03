
import { ChangeEvent, useState } from "react";
import { Button, ButtonGroup, Form, Icon, Item,  Segment } from "semantic-ui-react";
import { Quiz,Question } from "../../../app/models/quiz";




interface Props {
    closeForm: () => void;
    createQuiz: (quiz: Quiz) => void;
    quiz:Quiz | undefined;
    
}

export default function QuizDetails({quiz: playedQuiz, closeForm,createQuiz}:Props) {
    
    const initialState = playedQuiz ?? {
        id:'',
        title: '',
        description: '',
        picture: '',
        questions: [
          {
          id:'',
          questionDescription: '',
          option1: '',
          answer1: '',
          option2: '',
          answer2: '',
          option3: '',
          answer3: '',
          option4: '',
          answer4: '',
           } ],
      }
  
      const[quiz, setQuiz] = useState(initialState);
  
      function handleSubmit(){
        console.log(quiz);
      }
      function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setQuiz({...quiz,[name]: value})
  }
  
   

    return(
        <Segment inverted clearing color='violet' >
            <div className="formtitle">
            <Item>
                
            
                    <h1 id="appname">Quizzard</h1>
                    
            </Item>
            </div>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input label='Title' placeholder='Title' value={quiz.title} name='title' onChange={handleInputChange}/>
                <Form.TextArea placeholder='Description'/>
                <Form.Input placeholder='picture' />
                
                <Form.Input label='Question 1'placeholder='Question 1'/>
                <Form.Group >
                <Form.Input placeholder='Option 1' />
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                <Form.Input placeholder='Option 2'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                </Form.Group>
                <Form.Group>
                <Form.Input placeholder='Option 3'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                <Form.Input placeholder='Option 4'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                </Form.Group>

                <Form.Input label='Question 2'placeholder='Question 2'/>
                <Form.Group >
                <Form.Input placeholder='Option 1'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                <Form.Input placeholder='Option 2'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                </Form.Group>
                <Form.Group>
                <Form.Input placeholder='Option 3'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                <Form.Input placeholder='Option 4'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                </Form.Group>

                <Form.Input label='Question 3'placeholder='Question 3'/>
                <Form.Group >
                <Form.Input placeholder='Option 1'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                <Form.Input placeholder='Option 2'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                </Form.Group>
                <Form.Group>
                <Form.Input placeholder='Option 3'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                <Form.Input placeholder='Option 4'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                </Form.Group>

                <Form.Input label='Question 4'placeholder='Question 4'/>
                <Form.Group >
                <Form.Input placeholder='Option 1'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                <Form.Input placeholder='Option 2'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                </Form.Group>
                <Form.Group>
                <Form.Input placeholder='Option 3'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                <Form.Input placeholder='Option 4'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                </Form.Group>

                <Form.Input label='Question 5'placeholder='Question 5'/>
                <Form.Group >
                <Form.Input placeholder='Option 1'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                <Form.Input placeholder='Option 2'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                </Form.Group>
                <Form.Group>
                <Form.Input placeholder='Option 3'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                <Form.Input placeholder='Option 4'/>
                <Form.Field label='True' control='input' type='checkbox' />
                <Form.Field label='False' control='input' type='checkbox' />
                </Form.Group>
                
                <ButtonGroup fluid >
                <Button positive icon labelPosition='left'   color='green'size='huge'>
                 <Icon name = 'arrow alternate circle left'/>
                  Create
                </Button>
    
                <Button onClick={closeForm} negative icon labelPosition='right'  color='red'size='huge'>
                 <Icon name = 'cancel'/>
                  Cancel
                </Button>

                </ButtonGroup>
            </Form>
        </Segment>
    )
}