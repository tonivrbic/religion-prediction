﻿// <auto-generated />
using System;
using FlagsApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FlagsApi.Migrations
{
    [DbContext(typeof(PredictionContext))]
    [Migration("20180825131758_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.1-rtm-30846")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("FlagsApi.Models.UserPrediction", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime?>("CreationDate");

                    b.Property<string>("InputJson");

                    b.Property<string>("Name");

                    b.Property<string>("OutputJson");

                    b.Property<string>("UserId");

                    b.HasKey("Id");

                    b.ToTable("UserPredictions");
                });
#pragma warning restore 612, 618
        }
    }
}
