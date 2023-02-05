using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Quizzes
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Quiz Quiz { get; set; }

        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var quiz = await _context.Quizzes.FindAsync(request.Quiz.Id);

                _mapper.Map(request.Quiz, quiz);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}