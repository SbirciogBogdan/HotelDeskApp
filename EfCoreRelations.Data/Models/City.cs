using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace EfCoreRelations.Data.Models
{
    public class City
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<Hotel> Hotels { get; set; }
    }

    public class CityEntityConfiguration : IEntityTypeConfiguration<City>
    {
        public void Configure(EntityTypeBuilder<City> builder)
        {

        }
    }
}
