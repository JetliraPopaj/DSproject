using System.Security.Claims;
using System.Threading.Tasks;
using API.DTOs;
using API.Services;
using Domain;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[Controller]")]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<Player> _userManager;
        
        private readonly TokenService _tokenService;

        public AccountController(UserManager<Player> userManager,
        SignInManager<Player> signInManager, TokenService tokenService)
        {
            _tokenService = tokenService;
            _userManager = userManager;
        }
        
        [HttpGet]
        public async Task<ActionResult<UserDTO>> GetCurrentUser()
        {
            var user = await _userManager.FindByEmailAsync(User.FindFirstValue(ClaimTypes.Email));

            return CreatedUserObject(user);
        }
        private UserDTO CreatedUserObject(Player user)
        {
            return new UserDTO
            {
                    DisplayName = user.DisplayName,
                    Image = null,
                    Token = _tokenService.CreateToken(user),
                    Username = user.UserName

            };
        }

    }
}