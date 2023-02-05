using Domain;
using FluentValidation;

namespace Application.Quizzes
{
    public class QuizValidator : AbstractValidator<Quiz>
    {
        public QuizValidator()
        {
            RuleFor(x => x.Title).NotEmpty();
             RuleFor(x => x.Description).NotEmpty();
        }
    }
}