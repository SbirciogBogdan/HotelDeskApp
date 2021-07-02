using EfCoreRelations.Data.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EfCoreRelations.Data.DTOs
{
    public class RoomDTO
    {
        public int id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string UserId { get; set; }
        public string UserName { get; set; }

        public string Email { get; set; }

        public Decimal Price { get; set; }


        public int HotelId { get; set; }
        public string Hotel { get; set; }

    }
}
