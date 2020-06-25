
var application_database = [
    {
        first_name:"Example",
        last_name:"Person",
        phone:0987654321,
        email:"person@example.com",
        position:"Web developer"
      },{
    first_name:"Sinan",
    last_name:"Cengiz",
    phone:1234567890,
    email:"sinan@example.com",
    position:"Python Developer"
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
  var position = document.getElementById("select_position").value


  var temp_dict ={
      first_name:first_name,
      last_name:last_name,
      phone:phone,
      email:email,
      position:position
    }

    application_database.push(temp_dict)

  console.log(application_database)
  create_table()
})

function create_table(){
    var tbody = document.getElementById('tbody');
    tbody.innerHTML=""
    for (i =0;  i < application_database.length ; i++){
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerHTML =application_database[i].first_name;
        var td2 = document.createElement("td");
        td2.innerHTML =application_database[i].last_name;
        var td3 = document.createElement("td");
        td3.innerHTML =application_database[i].phone; 
        var td4 = document.createElement("td");
        td4.innerHTML =application_database[i].position;
        var td5 = document.createElement("td");
        td5.innerHTML =application_database[i].email; 
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