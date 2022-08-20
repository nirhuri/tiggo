using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace transaction_service.Controllers
{
    [ApiController]
    [Route("[transaction]")]
    public class HomeController : Controller
    {
        [HttpGet(Name = "cash")]
        public string getCashTransaction()
        {
            return "Cash Transaction response here...";
        }
    }
}

