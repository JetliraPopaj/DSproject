using System;
using  System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
namespace Persistence.Seed
{
    public class CategorySeed
    {
        public static async Task SeedData(DataContext context)
        {
            if(context.Categories.Any()) return;
            var categories = new List<Category>
            {
                new Category
                {
                    Id=1,
                    Name="Math",
                },
                 new Category
                {
                    Id=2,
                    Name="Astronomy"
                },
                 new Category
                {
                    Id=3,
                    Name="Geography"
                },
                new Category
                {
                    Id=4,
                    Name="Biology"
                },
                 new Category
                {
                    Id=5,
                   Name="Physics"
                },
                 new Category
                {
                    Id=6,
                    Name="Tech"
                },
                 new Category
                {
                    Id=7,
                    Name="Animals"
                },
                 new Category
                {
                    Id=8,
                    Name="Movies"
                }
            };
            await context.Categories.AddRangeAsync(categories);
            await context.SaveChangesAsync();
        }
    }
}