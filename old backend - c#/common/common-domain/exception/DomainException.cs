using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace common.common_domain.exception
{
public class DomainException : ApplicationException
    {
        public DomainException(string message):base(message)
        {}
        public DomainException(string message, Exception innerException) : base(message, innerException)
        { }

    }
}
