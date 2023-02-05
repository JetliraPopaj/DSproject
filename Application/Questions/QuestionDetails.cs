using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Questions
{
    public class QuestionDetails
    {
        public class Query : IRequest<Question>
        {
          public int Id {get; set;}
           
        }

        public class Handler : IRequestHandler<Query, Question>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Question> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Questions.FindAsync(request.Id);
            }
        }
    }
}