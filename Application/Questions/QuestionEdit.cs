using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Questions
{
    public class QuestionEdit
    {
        public class Command : IRequest
        {
            public Question Question { get; set; }

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
                var question = await _context.Questions.FindAsync(request.Question.Id);

                _mapper.Map(request.Question, question);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}