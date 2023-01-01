var form = `<div>
  <div class="form-group">
    <label for="name">Nombre</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Ingresa tu Nombre">
  </div>
  <div class="form-group mt-3">
    <label for="email">E-mail</label>
    <input type="email" class="form-control mt-1" id="email" placeholder="Ingresa tu Correo">
  </div>
  <button type="submit" class="btn btn-primary mt-4" onclick="save()">Guardar</button>
</div>`;

function table() {
    let table = `<table class="table">
  <thead>
    <tr>
      <th clsaa="col-1">NO</th>
      <th clsaa="col-3">Name</th>
      <th clsaa="col-4">Email</th>
      <th clsaa="col-2">Edit</th>
      <th clsaa="col-2">Delete</th>
    </tr>
  </thead>
  <tbody>`;
    for (let i = 0; i < details.length; i++){
        table = table + `<tr>
      <td>${i + 1}</td>
      <td>${details[i].name}</td>
      <td>${details[i].email}</td>
      <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};
document.getElementById("form").innerHTML = form;
details = [];
getData();
table();
function getData(){
    let Data = localStorage.getItem("details");
    if (Data) {
        details = JSON.parse(Data);
    } else {
        setData();
    };
};
function setData() {
    localStorage.setItem("details", JSON.stringify(details));
};
function save() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");

    if (name.value == 0) {
        alert("name is Empty");
        return
    }
    let data = {
        name: name.value,
        email: email.value
    };
    details.push(data);
    setData();

    // console.log(details)
    // console.log(email.value)
    table();
    name.value = "";
    email.value = "";
};
function deleteData(index) {
    details.splice(index, 1);
    setData();
    table();

    // console.log('delete work')
    // console.log(details)
};


