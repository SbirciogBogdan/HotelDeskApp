using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;


namespace EfCoreRelations.Data.Models
{
    public class RegisterModel
    {
        [Required(ErrorMessage = "User Name is required")]
        public string  Username { get; set; }
        [EmailAddress]
        [Required(ErrorMessage ="Email is required")]
        public string Email { get; set; }
        [Required(ErrorMessage ="Password is required")]
        public string Password { get; set; }
        [Required(ErrorMessage ="Phone Number is required")]
        public string PhoneNumber { get; set; }
    }
}
