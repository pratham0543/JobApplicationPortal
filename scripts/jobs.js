const xhr = new XMLHttpRequest();
const url = 'http://localhost:5001/company/postjob'

xhr.open("GET", url);

xhr.onreadystatechange = () => {
    
    if (xhr.status === 200 && xhr.readyState === 4) {
        let output = ``;
        let response = JSON.parse(xhr.responseText).entries;
        console.log(response);

       
        for (i = 0; i < response.length; i++) {
            output +=
                `
            <div class="card mb-4 text-center" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title text-center">${response[i].company_name}</h5>
                    <h6 class="card-subtitle mb-2 mt-2 text-muted">${response[i].position}</h6>
                    <p class="card-text">${response[i].job_desc}</p>
                        <p class="skills"><span>Skills Required: </span> ${response[i].skills}</p>
                    <a   data-bs-toggle="modal"
                    data-bs-target="#exampleModal" class="btn btn-dark">Apply</a>
                </div>
            </div>
            `;
        }
        document.querySelector('.jobs-container').innerHTML = output;

    }
   

}

xhr.send();

// Loader animation
document.querySelector('.jobs-container').innerHTML=`
<div class="d-flex justify-content-center">
<div class="spinner-grow text-dark" role="status">
<span class="visually-hidden">Loading...</span>
</div>
</div>`;


document.querySelector('#apply').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('#candName').value;
    const number = document.querySelector('#candNum').value;
    const email = document.querySelector('#cand_email').value;
    const role = document.querySelector('#role').value;
    const company = document.querySelector('#cand_comp').value;
    if (name.length !== 0 && email.length !== 0 && role.length !== 0 && company.length !== 0) {
        const newApplication = {
            name: name,
            number: number,
            email: email,
            role: role,
            comp: company
        }
        const xhr = new XMLHttpRequest();
        const url = 'http://localhost:5001/candidate/apply'

        xhr.open('POST', url)
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            // Your request is completed
            if (xhr.status !== 201) {
                console.log(xhr.responseText);
                document.querySelector("#signErrorMessage").innerHTML = JSON.parse(xhr.responseText).mes;
                document.querySelector("#signUpMessage").innerHTML = "";
            }
            else {
                document.querySelector("#signErrorMessage").innerHTML = "";
                document.querySelector("#signUpMessage").innerHTML = JSON.parse(xhr.responseText).mes;
                console.log(xhr.responseText);

            }
        };





        xhr.send(JSON.stringify(newApplication))



    }
    else
    {
        document.querySelector("#signErrorMessage").innerHTML="Please enter valid name or email or role and company"   
    }



})