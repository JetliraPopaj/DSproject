import { Grid, GridColumn, GridRow} from "semantic-ui-react";
import React from 'react';
import {  Question, Quiz } from '../../../app/models/quiz';
import QuizList from "./QuizList";
import QuizForm from "../form/QuizForm";
import QuizDetails from "../../details/QuizDetails";
import CategoryMenu from "../../categories/CategoryMenu";
import { Category } from "../../../app/models/category";


interface Props{
    quizzes:Quiz[];
    selectedQuiz: Quiz | undefined;
    selectQuiz: (id: number) => void;
    cancelSelectQuiz:() => void;
    question:Question[];
    createMode: boolean;
    openForm: (id:number) => void;
    closeForm: ()=> void;
    createQuiz: (quiz: Quiz) => void;
    categories:Category[];
    
}
export default function QuizDashboard({quizzes , selectQuiz,selectedQuiz,
cancelSelectQuiz, createMode, closeForm,openForm, createQuiz,categories}:Props){
    return(
        <Grid >
            <GridRow width='16' style={{marginLeft:'95px'}}>
            
             <CategoryMenu categories={categories} />
            </GridRow>
            <GridRow>
             <GridColumn width='6' >
             
             <QuizList quizzes={quizzes} selectQuiz={selectQuiz}/>
             </GridColumn>
             <GridColumn width='10'>
             { createMode &&
               <QuizForm closeForm={closeForm} quiz={selectedQuiz} createQuiz={createQuiz}/>}

                 {selectedQuiz && !createMode &&
                 <QuizDetails
                 quiz={selectedQuiz} 
                 cancelSelectQuiz={cancelSelectQuiz}
                 
               

                  />}
             </GridColumn>
             </GridRow>
             </Grid>
    )
}