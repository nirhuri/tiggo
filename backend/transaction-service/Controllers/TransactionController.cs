using Microsoft.AspNetCore.Mvc;
namespace transaction_service.Controllers;



[ApiController]
    [Route("transaction")]
    public class HomeController : ControllerBase
{
        [HttpGet(Name = "cash")]
        public string getCashTransaction()
        {
            return "Cash Transaction response here...";
        }
    }


