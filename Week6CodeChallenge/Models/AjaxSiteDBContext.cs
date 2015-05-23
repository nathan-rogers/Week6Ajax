using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
namespace Week6CodeChallenge.Models
{
    public class AjaxSiteDBContext :  DbContext
    {
        public virtual DbSet<ContactForm> ContactForms { get; set; }

        public AjaxSiteDBContext()
            : base("name=AjaxDBContext")
        {

        }
    }
}