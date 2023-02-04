using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.Quizzes;
using Microsoft.AspNetCore.Authorization;
using Application.Categories;

namespace API.Controllers
{
    [AllowAnonymous]
    public class CategoriesController : BaseApiController
    {  
        
        [HttpGet]
        public async Task<ActionResult<List<Category>>> GetCategories()
        {
            return await Mediator.Send(new ListCategories.Query());
        }
        
        [HttpGet("{id}")] // quizzes/id
        public async Task<ActionResult<Category>> GetCategory(int id)
        {
            return await Mediator.Send(new CategoryDetails.Query{Id = id});
        }
        

        

    }

}
