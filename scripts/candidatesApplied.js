
const xhr = new XMLHttpRequest();
const url = 'http://localhost:5001/candidate/apply'

xhr.open("GET", url);

xhr.onreadystatechange = () => {
    
    if (xhr.status === 200 && xhr.readyState === 4) {
        let output = ``;
        let response = JSON.parse(xhr.responseText).entries;
        console.log(response);

       
        for (i = 0; i < response.length; i++) {
            output +=
                `
                <tr>
                <th >${i+1}</th>
                <td class="cap">${response[i].name}</td>
                <td class="cap">${response[i].role}</td>
                <td>${response[i].email}</td>
              </tr>
            `;
        }
        document.querySelector('tbody').innerHTML = output;

    }
   

}

xhr.send();
document.querySelector('tbody').innerHTML=`
<div class="d-flex justify-content-center">
<div class="spinner-grow text-dark" role="status">
<span class="visually-hidden">Loading...</span>
</div>
</div>`;