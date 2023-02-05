using System;
using  System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence.Seed
{
    public class QuizSeed
    {
        public static async Task SeedData(DataContext context, UserManager<Player> userManager)
        {
            if(!userManager.Users.Any())
            {
                var users = new List<Player>
                {
                    new Player{DisplayName = "Arton", UserName = "arton", Email = "arton@test.com"},
                    new Player{DisplayName = "Linda", UserName = "linda", Email = "linda@test.com"},
                    new Player{DisplayName = "Ben", UserName = "ben", Email = "ben@test.com"},
                    new Player{DisplayName = "Tom", UserName = "tom", Email = "tom@test.com"},

                };
                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
            
            if(context.Quizzes.Any()) return;
            
            var quizzes = new List<Quiz>
            {
                new Quiz
                {
                    Id=1,
                    Title="Capitals of Europe Countries",
                    Description="Test your knowledge of how well you know European Countries",
                    Picture="geography",
                    Questions= new List<Question>
                    {
                     new Question
                {
                    Id=1,
                    QuestionDescription="Who is the capital of Kosovo?",
                    Option1="Pristina",
                    Answer1= true,
                    Option2="Tirana",
                    Answer2 = false,
                    Option3="Madrid",
                    Answer3 = false,
                    Option4="London",
                    Answer4= false,
                   
                },
                 new Question
                {
                    Id=2,
                    QuestionDescription="Who is the capital of Albania?",
                     Option1="Belgrade",
                    Answer1= false,
                    Option2="Tirana",
                    Answer2= true,
                    Option3="Berlin",
                    Answer3= false,
                    Option4="Bern",
                    Answer4 = false,
                    
                },
                 new Question
                {
                    Id=3,
                   QuestionDescription="Who is the capital of France?",
                    Option1="Sofia",
                    Answer1= false,
                    Option3="Skopje",
                    Answer3= false,
                    Option4="Lisbona",
                    Answer4= false,
                    Option2="Paris",
                    Answer2= true,
                     
                }
                }
            },
                new Quiz
                {
                    Id=2,
                    Title="The Solar System",
                    Description="How well do you know what lays in our Solar System?",
                    Picture="astronomy",
                    Questions= new List<Question>
                    {
                      new Question
                {  
                    Id=4,
                    QuestionDescription="How many planets are in our Solar System?",
                    Option1="5",
                    Answer1= false,
                    Option2="6",
                    Answer2= false,
                    Option3="9",
                    Answer3= true,
                    Option4="10",
                    Answer4= false,
                     
                },
                 new Question
                {
                    Id=5,
                    QuestionDescription="Which is the largest planet in our Solar System?",
                    Option1="Saturn",
                    Answer1= false,
                    Option2="Jupiter",
                    Answer2= true,
                    Option3="Pluto",
                    Answer3= false,
                    Option4="Neptun",
                    Answer4= false,
                     
                },
                 new Question
                {
                    Id=6,
                    QuestionDescription="What's the name of the satellite of planet Earth?",
                     Option1="Moon",
                    Answer1= true,
                    Option3="Venus",
                    Answer3= false,
                    Option2="Charon",
                    Answer2= false,
                    Option4="Mercury",
                    Answer4= false,
                    
                    
                    
                }  
                    }
                   
                }
            };
        await context.Quizzes.AddRangeAsync(quizzes);
        await context.SaveChangesAsync();
                

        }
    }
}