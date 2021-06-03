using HotelDeskAPI.Models;
using EfCoreRelations.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EfCoreRelations.Data
{
    public class HotelDeskDbContext : DbContext
    {
        public HotelDeskDbContext(DbContextOptions<HotelDeskDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<UserType> UserTypes { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Facilities> Facilities { get; set; }
        public DbSet<Hotel> Hotels { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Reviews> Reviews { get; set; }
        public DbSet<Feedback> Feedbacks { get; set; }
        public DbSet<HotelPhoto> HotelPhotos { get; set; }
        public DbSet<Reservation> Appoinments { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
