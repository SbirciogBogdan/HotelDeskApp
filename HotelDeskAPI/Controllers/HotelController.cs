using EfCoreRelations.Data;
using EfCoreRelations.Data.DTOs;
using EfCoreRelations.Data.Models;
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
    public class HotelController : ControllerBase
    {

        private readonly HotelDeskDbContext _context;

        public HotelController(HotelDeskDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hotel>>> GetHotel()
        {

            return await _context.Hotels.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Hotel>> GetHotel(int id)
        {
            var rentPosts = await _context.Hotels.FindAsync(id);

            if (rentPosts == null)
            {
                return NotFound();
            }

            return rentPosts;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutHotel(int id, [FromBody] Hotel hotel)
        {
            if (!_context.Hotels.Any(b => b.Id == id))
            {
                return BadRequest();
            }

            try
            {
                var currentPost = _context.Hotels.Single(b => b.Id == id);

                currentPost.Name = hotel.Name;
                currentPost.Description = hotel.Description;
                currentPost.Location = hotel.Location;
                currentPost.PhoneNumber = hotel.PhoneNumber;
                currentPost.CityId = hotel.CityId;


                await _context.SaveChangesAsync();

            }
            catch (Exception)
            {

                throw;

            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Hotel>> PostHotel(Hotel hotel)
        {
            _context.Hotels.Add(hotel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHotels", new { id = hotel.Id }, hotel);
        }



        [HttpDelete("{id}")]
        public async Task<ActionResult<Hotel>> DeleteHotel(int id)
        {
            var post = await _context.Hotels.FindAsync(id);
            if (post == null)
            {
                return NotFound();
            }

            _context.Hotels.Remove(post);
            await _context.SaveChangesAsync();

            return post;
        }

        [HttpGet("{id}/Details")]
        public async Task<ActionResult<HotelDTO>> RentPostDetails(int id)
        {
            var hotel = await _context.Hotels.FindAsync(id);

            var cities = await _context.Cities.FindAsync(hotel.CityId);

            var user = await _context.Users.FindAsync(hotel.UserId);

            HotelDTO details = new HotelDTO()
            {
                id = hotel.Id,
                Name = hotel.Name,
                Description = hotel.Description,
                Location = hotel.Location,
                PhoneNumber = hotel.PhoneNumber,
                UserId = user.Id,
                UserName = user.UserName,
                City = cities.Name,
                CityId = cities.Id
            };
            return details;

        }
    }
}