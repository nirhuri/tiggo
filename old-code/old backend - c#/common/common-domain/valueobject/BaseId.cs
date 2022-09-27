using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace common.common_domain.valueobject
{
    public abstract class BaseId<T>
    {
        private readonly T value;
        protected BaseId(T value)
        {
            this.value = value;
        }
        public T getValue()
        {
            return value;
        }
    }
}
