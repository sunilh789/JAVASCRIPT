var emp = {
	
	      employees:[
                            {
								name:"sunilpatel",
								age:25,
                                salary:2000,
                                address:{
									   
									          city:"Bengaluru",
                                              state:"Karnataka",
                                              pincode:560100											  
									 
								          }								
						    } ,
							{
								name:"Sachin",
								age:47,
                                salary:2000,
                                address:{
									   
									          city:"Mumbai",
                                              state:"MH",
                                              pincode:123456										  
									 
								          }								
						    } ,
							
							{
								name:"Virat",
								age:"kohli",
                                salary:2000,
                                address:{
									   
									          city:"Delhi",
                                              state:"Delhi",
                                              pincode:123456											  
									 
								          }								
						    } ,
							{
								name:"Rohit",
								age:"Sharma",
                                salary:2000,
                                address:{
									   
									          city:"Mumbai",
                                              state:"MH",
                                              pincode:560100											  
									 
								          }								
						    } ,
							{
								name:"KL Rahul",
								age:"kumar",
                                salary:2000,
                                address:{
									   
									          city:"Bengaluru",
                                              state:"Karnataka",
                                              pincode:560100											  
									 
								          }								
						    } ,
                            
					]
};

console.log("Array object size of 5");
console.log("1 "+emp.employees[0].name+" "+emp.employees[0].age+" "+emp.employees[0].salary+" "+emp.employees[0].address.city+"  "+emp.employees[0].address.state+" "+emp.employees[0].address.pincode);
console.log("2 "+emp.employees[1].name+" "+emp.employees[1].age+" "+emp.employees[1].salary+" "+emp.employees[1].address.city+"  "+emp.employees[1].address.state+" "+emp.employees[1].address.pincode);
console.log("3 "+emp.employees[2].name+" "+emp.employees[2].age+" "+emp.employees[2].salary+" "+emp.employees[2].address.city+"  "+emp.employees[2].address.state+" "+emp.employees[1].address.pincode);
console.log("4 "+emp.employees[3].name+" "+emp.employees[3].age+" "+emp.employees[3].salary+" "+emp.employees[3].address.city+"  "+emp.employees[3].address.state+" "+emp.employees[1].address.pincode);
console.log("5 "+emp.employees[4].name+" "+emp.employees[4].age+" "+emp.employees[4].salary+" "+emp.employees[4].address.city+"  "+emp.employees[4].address.state+" "+emp.employees[1].address.pincode);