using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PetProjectApi.Models
{
    public class HotelPhoto
    {
        public int Id { get; set; }
        public int HotelId { get; set; }
        [Column(TypeName = "image")]
        public byte[] HotelImage { get; set; }
    }
    public class HotelPhotoEntityCOnfiguration : IEntityTypeConfiguration<HotelPhoto>
    {
        public void Configure(EntityTypeBuilder<HotelPhoto> builder)
        {

        }
    }
}
