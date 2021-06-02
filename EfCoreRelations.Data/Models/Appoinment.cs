using PetProjectApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EfCoreRelations.Data.Models
{
    public class Appoinment
    {
        public int Id { get; set; }

        [ForeignKey("HotelId")]
        public int HotelId { get; set; }

        public Hotel Hotel { get; set; }

        [ForeignKey("UserId")]
        public int UserId { get; set; }

        public User User { get; set; }

        [ForeignKey("RoomId")]
        public int? RoomId { get; set; }
        public Room Room { get; set; }

        [Column(TypeName = "datetime")]
        public DateTime Date { get; set; }

    }

    public class AppoinmentEntityConfiguration : IEntityTypeConfiguration<Appoinment>
    {
        public void Configure(EntityTypeBuilder<Appoinment> builder)
        {

        }
    }


}
