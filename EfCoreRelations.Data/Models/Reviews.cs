using PetProjectApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace EfCoreRelations.Data.Models
{
    public class Reviews
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Title { get; set; }
        public int Rating { get; set; }

        [ForeignKey("UserId")]
        public int UserId { get; set; }

        public User User { get; set; }
        [ForeignKey("HotelId")]
        public int HotelId { get; set; }
        public Hotel Hotel { get; set; }
    }
    public class ReviewEntityConfiguration : IEntityTypeConfiguration<Reviews>
    {
        public void Configure(EntityTypeBuilder<Reviews> builder)
        {

        }
    }
}
