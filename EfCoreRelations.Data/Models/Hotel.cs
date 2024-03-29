﻿using HotelDeskAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using static System.Net.Mime.MediaTypeNames;


namespace EfCoreRelations.Data.Models
{
    public class Hotel
    {
        public int Id { get; set; }
        [Required]
        [ForeignKey("UserId")]
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [ForeignKey("CityId")]
        public int CityId { get; set; }
        public City City { get; set; }

        [Required]
        public string Location { get; set; }

        [Required]
        public string PhoneNumber { get; set; }

        [Required]
        public string Description { get; set; }

        public ICollection<Reviews> Reviews { get; set; }
        public ICollection<Room> Rooms { get; set; }
        public ICollection<Reservation> Appoinments { get; set; }
        public IList<Facilities> Facilities { get; set; }
    }
    public class HotelEnityConfiguration : IEntityTypeConfiguration<Hotel>
    {
        public void Configure(EntityTypeBuilder<Hotel> builder)
        {

        }
    }
}
