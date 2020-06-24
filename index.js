
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