using EfCoreRelations.Data;
using EfCoreRelations.Data.DTOs;
using EfCoreRelations.Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace HotelDeskAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly HotelDeskDbContext _context;

        public UserController(HotelDeskDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Object>> GetUser(string id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            var query = new
            {
                Id = user.Id,
                Name = user.UserName,
                Email = user.Email,
                PhoneNumber = user.PhoneNumber
            };
            return query;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(string id, [FromBody] UserDTO User)
        {
            if(!_context.Users.Any(b => b.Id == id))
            {
                return BadRequest();
            }

            var users = await _context.Users.ToListAsync();

            foreach(var user in users)
            {
                if(user.Email== User.Email && user.Id != id)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "Email already in use!" });
                }
            }

            try
            {
                var currentPost = _context.Users.Single(b => b.Id == id);

                currentPost.UserName = User.UserName;
                currentPost.Email = User.Email;
                currentPost.PhoneNumber = User.PhoneNumber;
                currentPost.NormalizedEmail = User.Email.ToUpper();
                currentPost.NormalizedUserName = User.UserName.ToUpper();

                await _context.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw;
            }

            return NoContent();
        }

    }
}
