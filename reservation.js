var date = new Date();
date.setDate(date.getDate()-1);

$('#date').datepicker({ 
    startDate: date
});


$(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    var options={
        format: 'dd/mm/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    };
    date_input.datepicker(options);
    })

var reserve_select_hours = document.getElementById("select_hours");
var am_pm ="AM"
for(i=10; i < 24; i += 1)
{
if (i >= 12){
    am_pm ="PM"
}
    // create hour 00 option
var opt = document.createElement("option");
opt.value= i.toString()+":30";
opt.innerHTML = i.toString() +":00 "+am_pm; // whatever property it has
// then append it to the select element
reserve_select_hours.appendChild(opt);
 // create hour:30 option
var opt = document.createElement("option");
opt.value= i.toString()+":30";
opt.innerHTML = i.toString() +":30 "+am_pm; // whatever property it has
// then append it to the select element
reserve_select_hours.appendChild(opt);
}

 // add optin for 00:00
 var opt = document.createElement("option");
 opt.value= "00:00";
 opt.innerHTML = "00:00 AM"; // whatever property it has
 // then append it to the select element
 reserve_select_hours.appendChild(opt);


 /// Populate Person Section
var reserve_select_hours = document.getElementById("select_person");
var person_people = "person"
for(i=1; i < 21; i += 1)
{
    if(i>1){
        person_people = "people"
    }
    // create hour 00 option
var opt = document.createElement("option");
opt.value= i.toString();
opt.innerHTML = i.toString() +" "+person_people; // whatever property it has
// then append it to the select element
reserve_select_hours.appendChild(opt);
}


var reservation_database = [
    {
        first_name:"Example",
        last_name:"Person",
        phone:0987654321,
        email:"person@example.com",
        date:"25/06/2020",
        hours:"15:30",
        people:"10"
      },{
    first_name:"Sinan",
    last_name:"Cengiz",
    phone:1234567890,
    email:"sinan@example.com",
    date:"23/06/2020",
    hours:"10:30",
    people:"2"
  }
]

// get form input values
const form = document.querySelector('form')
form.addEventListener('submit', event => {
  // submit event detected
  event.preventDefault()

  var first_name = document.getElementById("first_name").value
  var last_name = document.getElementById("last_name").value
  var phone = document.getElementById("phone").value
  var email = document.getElementById("email").value
  var date = document.getElementById("date").value
  var hours = document.getElementById("select_hours").value
  var people = document.getElementById("select_person").value

  var temp_dict ={
      first_name:first_name,
      last_name:last_name,
      phone:phone,
      email:email,
      date:date,
      hours:hours,
      people:people
    }

    reservation_database.push(temp_dict)

  console.log(reservation_database)
  create_table()
})

function create_table(){
    var tbody = document.getElementById('tbody');
    tbody.innerHTML=""
    for (i =0;  i < reservation_database.length ; i++){
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML =reservation_database[i].first_name;
        var td2 = document.createElement("td");
        td2.innerHTML =reservation_database[i].last_name;
        var td3 = document.createElement("td");
        td3.innerHTML =reservation_database[i].phone; 
        var td4 = document.createElement("td");
        td4.innerHTML =reservation_database[i].date;
        var td5 = document.createElement("td");
        td5.innerHTML =reservation_database[i].people; 
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        
        tbody.appendChild(tr);
    }

}
//initial create table
create_table()

