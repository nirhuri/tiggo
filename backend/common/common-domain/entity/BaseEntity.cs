using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace common.common_domain.entity
{
    public abstract class BaseEntity<ID>
    {
        public virtual int Id { get; protected set; }
    }
}
