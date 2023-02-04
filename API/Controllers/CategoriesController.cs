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
        
        [HttpPost]
        public async Task<IActionResult> CreateCateogory(Category category)
        {
            return Ok(await Mediator.Send(new CreateCategory.Command {Category = category}));

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditCategory(int id,Category category)
        {
        category.Id= id;
            return Ok(await Mediator.Send(new EditCategory.Command{Category = category}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
             return Ok(await Mediator.Send(new DeleteCategory.Command{Id = id}));
        }
        
    }

}
