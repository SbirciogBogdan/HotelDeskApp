using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EfCoreRelations.Data.Models
{
    public class Room
    {
        [Required]
        [ForeignKey("UserId")]
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        [ForeignKey("HotelId")]
        public int HotelId { get; set; }
        public int Price { get; set; }

        public string Photo { get; set; }
        public Hotel Hotel { get; set; }
        public ICollection<Reservation> Reservations { get; set; }
    }
    public class RoomEntityConfiguration : IEntityTypeConfiguration<Room>
    {
        public void Configure(EntityTypeBuilder<Room> builder)
        {

        }
    }
}
