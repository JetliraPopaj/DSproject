using Microsoft.EntityFrameworkCore;
using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Reflection;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence
{
    public class DataContext : IdentityDbContext<Player>
    {
        public DataContext( DbContextOptions options) : base(options)
        {
        }
        public DbSet<Quiz> Quizzes{get;set;}
        public DbSet<Question> Questions{get;set;}
        public DbSet<Category> Categories{get;set;}

        
        public class CategoryConfigurations : IEntityTypeConfiguration<Category>
        {
         public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            builder.Property(p =>p.Name).IsRequired().HasMaxLength(64);
        }
    }
    public class QuizConfigurations : IEntityTypeConfiguration<Quiz>
    {
        public void Configure(EntityTypeBuilder<Quiz> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            builder.Property(p => p.Title).IsRequired().HasMaxLength(64);
            builder.Property(p =>p.Description).IsRequired().HasMaxLength(128);
            builder.Property(p => p.Picture).IsRequired();
        }
    }
    public class QuestionConfigurations : IEntityTypeConfiguration<Question>
    {
        public void Configure(EntityTypeBuilder<Question> builder)
        {
            builder.Property(p => p.Id).IsRequired();
            builder.Property(p =>p.QuestionDescription).IsRequired().HasMaxLength(128);
            builder.Property(p => p.Option1).IsRequired().HasMaxLength(100);
            builder.Property(p => p.Answer1).IsRequired();
            builder.Property(p => p.Option2).IsRequired().HasMaxLength(100);
            builder.Property(p => p.Answer2).IsRequired();
            builder.Property(p => p.Option3).IsRequired().HasMaxLength(100);
            builder.Property(p => p.Answer3).IsRequired();
            builder.Property(p => p.Option4).IsRequired().HasMaxLength(100);
            builder.Property(p => p.Answer4).IsRequired();
            }
        }    
    }
}