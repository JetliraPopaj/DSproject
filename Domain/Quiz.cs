using System;
using System.Collections.Generic;

namespace Domain
{
    public class Quiz
    {
        public int Id {get;set;}

        public string Title { get; set; }

        public string Description {get;set;}

        public string Picture {get; set;}
        public ICollection<Question> Questions{get;set;}= new List<Question>();

       
        
        
    }
}