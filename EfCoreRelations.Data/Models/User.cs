using EfCoreRelations.Data.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;


namespace PetProjectApi.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [ForeignKey("TypeId")]
        public int TypeId { get; set; }
        public UserType UserType { get; set; }

        public string Password { get; set; }
        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public ICollection<Appoinment> Appoinments { get; set; }
        public ICollection<Reviews> Reviews { get; set; }
    }
    public class UserEntityConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {

        }
    }
}
