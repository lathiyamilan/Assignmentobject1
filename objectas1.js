// let teacher ={
//     fname :"Milan",
//     lname : " lathiya",
//     field : "Engineering",
//     address :{


//     }

// }

// console.log("Teacher Name is :",teacher.fname +  teacher.lname);



let teacher={
        firstName:"Milan",
        lastName :"Lathiya",
        contactNo:"9173680189",
        degree : {
            Engineering:"CSC",
            Phd:"Advance Computing",
        },

        certificates :{
            certificate1:"AWS Solution Architect",
            certificate2:"Adobe Certified Associate(ACA)"
        },
        degreeCeritificate:function (){
            return this.degree.Engineering +this.degree.Phd+ this.certificates.certificate1+this.certificates.certificate2 ;
        }
    }
// console.log(`Teacher's Full Name : ${teacher.firstName} ${teacher.lastName}`);
console.log("Teacher's Full Name :" ,teacher.firstName , teacher.lastName);
console.log("Teacher's Degrees :",teacher.degree);
console.log("Teacher's Certifattes : ",teacher.certificates)
let dc=teacher.degreeCeritificate();
console.log(`Teacher's degrees and certificates are : ${dc}`);