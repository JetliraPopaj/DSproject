using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Quizzes
{
    public class Details
    {
        public class Query : IRequest<Quiz>
        {
          public int Id {get; set;}
           
        }

        public class Handler : IRequestHandler<Query, Quiz>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Quiz> Handle(Query request, CancellationToken cancellationToken)
            {
                 
                var quizzes =await _context.Quizzes
                .Include(q => q.Questions)
                .ToListAsync();
               return await _context.Quizzes.FindAsync(request.Id);
            
               
            }
        }
    }
}