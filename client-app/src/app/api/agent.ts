import axios, { AxiosResponse } from 'axios';
import { Category } from '../models/category';
import { Question, Quiz} from '../models/quiz';


const sleep = (delay: number) => {
    return new Promise ((resolve) => {
        setTimeout(resolve, delay)
    })
}

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.response.use(async response => {
   try{
       await sleep(1000);
        return response;
    } catch (error)  {
        console.log(error);
        return await Promise.reject(error);
    }
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
get : <T>(url : string) => axios.get<T>(url).then(responseBody),
post :<T> (url : string, body:{}) => axios.post<T>(url, body).then(responseBody),
put :<T> (url : string, body:{}) => axios.put<T>(url).then(responseBody),
del : <T>(url : string) => axios.delete<T>(url).then(responseBody),
}

const Quizzes = {
    list: () => requests.get<Quiz[]>('/quizzes'),
    details: (id: number )=> requests.get<Quiz>('/quizzes/${id}'),
    create: (quiz: Quiz) => requests.post('/quizzes', quiz),
    update: (quiz: Quiz) => requests.put ('/quizzes/${quiz.id}', quiz),
    delete: (id: number) => requests.del<void>('/quizzes/${id}')

}  
const Questions = {
    list: () => requests.get<Question[]>('/questions'),
    details: (id: number )=> requests.get<Question>('/questions/${id}'),
    create: (question: Question) => requests.post('/questions', question),
    update: (question: Question) => requests.put ('/question/${question.id}', question),
    delete: (id: number) => requests.del<void>('/question/${id}')
}

const Categories = {
    list: () => requests.get<Category[]>('/categories'),
    details: (id: number )=> requests.get<Category>('/categories/${id}'),
    create: (category: Category) => requests.post('/categories', category),
    update: (category: Category) => requests.put ('/category/${category.id}', category),
    delete: (id: number) => requests.del<void>('/category/${id}')
}

const agent = {
    Quizzes,
    Questions,
    Categories
}

export default agent;