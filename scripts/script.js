
//AJAX CALLS FOR COMPANIES
document.querySelector('#compLogin').addEventListener('click',(e)=>
{
    e.preventDefault();
    const email=document.querySelector("#compEmail").value;
    const password=document.querySelector("#compPassword").value;
  //1. Appply validation
  
  
    const userLogin={
        email:email,
        password:password
    }
    const xhr=new XMLHttpRequest();
    const url='http://localhost:5001/company/login'

    xhr.open('POST',url);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange=()=>
    {
        if(xhr.readyState===4 && xhr.status===201)
        {
            console.log(xhr.responseText);
            window.location.href="/companyHome.html"
        }
        else if(xhr.status===400 && xhr.readyState===4)
        {
            console.log(document.querySelector('#loginErrorMesage').innerHTML=JSON.parse(xhr.responseText).mes);
        }
    }

    xhr.send(JSON.stringify(userLogin));


})






//Signup for company
document.querySelector('#signup-btn').addEventListener('click',(e)=>
{
    e.preventDefault();
    const name=document.querySelector('#compName').value;
    const email=document.querySelector('#compUpEmail').value
    const password=document.querySelector("#compUpPassword").value
    //Apply validation
    if(name.length!==0 && email.length!==0 && password.length!==0)
    {

    const newUser={
        email:email,
        name:name,
        password:password
    }
    const xhr=new XMLHttpRequest();
    const url='http://localhost:5001/company/signup'
    
    xhr.open('POST',url)
    xhr.setRequestHeader('Content-Type', 'application/json')
    
    xhr.onload =  ()=> {
        // Your request is completed
        if ( xhr.status !== 201) {
           console.log(xhr.responseText);
           document.querySelector("#signErrorMessage").innerHTML=JSON.parse(xhr.responseText).mes;
           document.querySelector("#signUpMessage").innerHTML="";
        }
        else
        {
            document.querySelector("#signErrorMessage").innerHTML="";
            document.querySelector("#signUpMessage").innerHTML=JSON.parse(xhr.responseText).mes;
                console.log(xhr.responseText);
            
        }
    };
    




    xhr.send(JSON.stringify(newUser))

    }
    else
    {
        document.querySelector("#signErrorMessage").innerHTML="Please enter valid name or email or password";
    }
})






