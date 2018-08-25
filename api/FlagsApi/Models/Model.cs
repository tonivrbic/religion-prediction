using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace FlagsApi.Models
{
    public class PredictionContext : DbContext
    {
        public PredictionContext(DbContextOptions<PredictionContext> options)
            : base(options)
        { }

        public DbSet<UserPrediction> UserPredictions { get; set; }
    }

    public class UserPrediction
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UserId { get; set; }
        public string InputJson { get; set; }
        public string OutputJson { get; set; }
        public DateTime? CreationDate { get; set; }
    }
}