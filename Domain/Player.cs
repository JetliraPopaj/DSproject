
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace  Domain
{
    public class Player : IdentityUser
    {
        

        public string DisplayName{get;set;}

        public string Bio {get; set;}

      
        

    }
}