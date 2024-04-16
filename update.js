window.addEventListener('DOMContentLoaded',() => renderRegistros());

async function renderRegistros() {
    let url = 'http://localhost:3000/registros';
    const response = await fetch(url);
    const data = await response.json();
    await render(data);
}

async function render(data){
    data.forEach(e => {
        let registro = document.createElement('tr');
        registro.innerHTML = `
            <td>${e.name}</td>
            <td>${e.email}</td>
            <td>${e.checkin}</td>
            <td>${e.checkout}</td>
            <td>${e.obsvs}</td>
            <td>${e.adults}</td>
            <td>${e.children}</td>
       `
        document.getElementById('table').appendChild(registro);
    });
}