using EfCoreRelations.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EfCoreRelations.Data
{
    public static class DbInitializer
    {

        public static void Initialize(HotelDeskDbContext context)
        {

            if (context.Cities.Any())
            {
                return;
            }
            var cities = new City[]
            {
                new City{Name="Bucuresti"},
                new City{Name="Brasov"},
                new City{Name="Iasi"},
                new City{Name="Timisoara"},
                new City{Name="Cluj"},
                new City{Name="Focsani"},
                new City{Name="Craiova"}

            };
            context.Cities.AddRange(cities);
            context.SaveChanges();

            if (context.Users.Any())
            {
                return;
            }
            var users = new ApplicationUser[]
           {
                new ApplicationUser
                {
                    Id="1",
                    UserName= "Donald Trump",
                    Email= "theonetrump@farmex.com",
                    PhoneNumber= "+40 (889) 555-3238",
                    PasswordHash= "12345"
                },

                new ApplicationUser
                {
                    Id="2",
                    UserName="Joe Biden",
                    Email="imadeit@va.gov",
                    PhoneNumber="+1 815 355 6522",
                    PasswordHash="fM100s8khu7d"
                },
                new ApplicationUser
                {
                    Id="3",
                    UserName="Hilarry Clinton",
                    Email="hilarryclint@techcrunch.com",
                    PhoneNumber="+52 259 425 1371",
                    PasswordHash="nfIElu0sUf"
                }

           };
            context.Users.AddRange(users);
            context.SaveChanges();

            if (context.Hotels.Any())
            {
                return;
            }
            var hotels = new Hotel[]
            {
                new Hotel{
                      Name= "Hilton",
                      UserId="2",
                      Description= "Daca esti Francez nu o sa iti placa",
                      Location= "350 Center Lane",
                      CityId= 2,
                      PhoneNumber= "0712345678",
                    },

                new Hotel{
                    Name= "Intercontinental",
                    UserId="2",
                    Description= "Inalt si frumos, central",
                    Location= "510 Arctic",
                    CityId= 2,
                    PhoneNumber= "0734567891",
                    },

                  new Hotel{
                    Name= "Cismigiu",
                    UserId="2",
                    Description= "Avem piese facute dupa noi",
                    Location= "12460 Sesamey Street",
                    CityId= 1,
                    PhoneNumber= "0723456789",
                    },

                  new Hotel{
                    Name ="Grand Bucharest",
                    UserId="2",
                    Description= "Proaspat renovat, central",
                    Location= "398 Nea Titu",
                    CityId= 1,
                    PhoneNumber= "0745678912",
                    }

                };
            context.Hotels.AddRange(hotels);
            context.SaveChanges();

            var rooms = new Room[]
            {
                new Room{
                      Name= "Room 1",
                      UserId="2",
                      Description= "Descriere",
                      Price= 350,
                      HotelId= 2,
                    },

                new Room{
                      Name= "Room 2",
                      UserId="2",
                      Description= "Descriere",
                      Price= 400,
                      HotelId= 2,
                    },

                  new Room{
                      Name= "Room 1",
                      UserId="2",
                      Description= "Descriere",
                      Price= 350,
                      HotelId= 1,
                    },

                  new Room{
                      Name= "Room 2",
                      UserId="2",
                      Description= "Descriere",
                      Price= 500,
                      HotelId= 2,
                    },

                };
            context.Rooms.AddRange(rooms);
            context.SaveChanges();


        }

    }
}
