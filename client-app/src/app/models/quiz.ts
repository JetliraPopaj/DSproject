export interface Question {
        id: number;
        questionDescription: string;
        option1: string;
        answer1: boolean;
        option2: string;
        answer2: boolean;
        option3: string;
        answer3: boolean;
        option4: string;
        answer4: boolean;
    }
export interface Quiz {
        id: number;
        title: string;
        description: string;
        picture: string;
        questions?: Question[];
    }
    export interface Category {
        id: number;
        name: string;
        quizzes: Quiz[];
    }


