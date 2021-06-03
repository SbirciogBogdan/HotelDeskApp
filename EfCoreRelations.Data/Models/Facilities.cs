using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;


namespace EfCoreRelations.Data.Models
{
    public class Facilities
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int HotelId { get; set; }
    }
    public class FacilitiesEntityConfiguration : IEntityTypeConfiguration<Facilities>
    {
        public void Configure(EntityTypeBuilder<Facilities> builder)
        {

        }
    }
}
