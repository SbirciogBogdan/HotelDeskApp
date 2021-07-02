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
    public class RoomController : ControllerBase
    {

        private readonly HotelDeskDbContext _context;

        public RoomController(HotelDeskDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Room>>> GetRoom()
        {

            return await _context.Rooms.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Room>> GetRoom(int id)
        {
            var rooms = await _context.Rooms.FindAsync(id);

            if (rooms == null)
            {
                return NotFound();
            }

            return rooms;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutRoom(int id, [FromBody] Room room)
        {
            if (!_context.Rooms.Any(b => b.Id == id))
            {
                return BadRequest();
            }

            try
            {
                var currentRoom = _context.Rooms.Single(b => b.Id == id);

                currentRoom.Name = room.Name;
                currentRoom.Description = room.Description;
                currentRoom.Price = room.Price;
                currentRoom.HotelId = room.HotelId;


                await _context.SaveChangesAsync();

            }
            catch (Exception)
            {

                throw;

            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Hotel>> PostRoom(Room room)
        {
            _context.Rooms.Add(room);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRooms", new { id = room.Id }, room);
        }



        [HttpDelete("{id}")]
        public async Task<ActionResult<Room>> DeleteRoom(int id)
        {
            var room = await _context.Rooms.FindAsync(id);
            if (room == null)
            {
                return NotFound();
            }

            _context.Rooms.Remove(room);
            await _context.SaveChangesAsync();

            return room;
        }

        [HttpGet("{id}/Details")]
        public async Task<ActionResult<RoomDTO>> RoomDetails(int id)
        {
            var room = await _context.Rooms.FindAsync(id);

            var hotels = await _context.Hotels.FindAsync(room.HotelId);

            var user = await _context.Users.FindAsync(room.UserId);

            RoomDTO details = new RoomDTO()
            {
                id = room.Id,
                Name = room.Name,
                Description = room.Description,
                Price = room.Price,
                UserId = user.Id,
                UserName = user.UserName,
                Hotel = hotels.Name,
                HotelId = hotels.Id
            };
            return details;

        }
    }
}