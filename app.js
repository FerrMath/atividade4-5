const subBtn = document.getElementById("submit");

subBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let formElement = document.forms.contact_form;
    let formData = new FormData(formElement);

    let object = {};

    object["id"] = Date.now();
    formData.keys().forEach(key => {
        object[key] = formData.get(key);
    });
    postFormData(object);
    alert("Registro criado com sucesso!");
    }
);

function postFormData(object){
    fetch("http://localhost:3000/registros", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error: ", error));
}