using System.Threading;
using System.Threading.Tasks;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Quizzes
{
    public class Create
    {
        public class Command : IRequest
        {
        public Quiz Quiz { get; set; }
        }
         public class CommandValidator : AbstractValidator<Command>
         {
         public CommandValidator()
         {
             RuleFor(x => x.Quiz).SetValidator(new QuizValidator());
         }
         }

    

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
            _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
            _context.Quizzes.Add(request.Quiz);

             await _context.SaveChangesAsync();

             return Unit.Value;
            }
        }
    }
}