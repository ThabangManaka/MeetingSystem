using MeetingManagement.Models;
using Microsoft.EntityFrameworkCore;

namespace MeetingManagement.Data {


public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options){}

          public DbSet<Meeting> Meetings { get; set; }
         public DbSet<MeetingType> MeetingTypes { get; set; }
        public DbSet<MeetingItem> MeetingItems { get; set; }
         public DbSet<Users> Users { get; set; }

    }
}