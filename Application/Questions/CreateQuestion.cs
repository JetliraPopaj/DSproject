using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Questions
{
    public class CreateQuestion
    {
        public class Command : IRequest
        {
        public Question Question { get; set; }
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
            _context.Questions.Add(request.Question);

             await _context.SaveChangesAsync();

             return Unit.Value;
            }
        }
    }
}