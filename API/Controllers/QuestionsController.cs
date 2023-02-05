using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.Quizzes;
using Microsoft.AspNetCore.Authorization;
using Application.Questions;

namespace API.Controllers
{
    [AllowAnonymous]
    public class QuestionsController : BaseApiController
    {  
        
        [HttpGet]
        public async Task<ActionResult<List<Question>>> GetQuestions()
        {
            return await Mediator.Send(new ListQuestions.Query());
        }
        
        [HttpGet("{id}")] // quizzes/id
        public async Task<ActionResult<Question>> GetQuestion(int id)
        {
            return await Mediator.Send(new QuestionDetails.Query{Id = id});
        }
        

        [HttpPost]
        public async Task<IActionResult> CreateQuestion(Question question)
        {
            return Ok(await Mediator.Send(new CreateQuestion.Command {Question = question}));

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> QuestionEdit(int id,Question question)
        {
            question.Id= id;
            return Ok(await Mediator.Send(new QuestionEdit.Command{Question = question}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuestion(int id)
        {
             return Ok(await Mediator.Send(new DeleteQuestion.Command{Id = id}));
        }

    }

}
