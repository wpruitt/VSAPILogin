using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

/*
 *Class: Address
 *Purpose: Class specifying fields of an Address
 *Author: Willie
 *Properties:
 *  Address1:
 *  Address2:
 *  City: 
 *  State: 
 *  Zipcode
*/

namespace WFRC.Models
{
    public class Address
    {

        [Required]
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string State { get; set; }
        [Required]
        public string ZipCode { get; set; }
    }
}