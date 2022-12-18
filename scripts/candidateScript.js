//AJAX CALLS FOR Candidates
document.querySelector('#candLogin').addEventListener('click',(e)=>
{
    e.preventDefault();
    const email=document.querySelector("#candEmail").value;
    const password=document.querySelector("#candPassword").value;
  //1. Appply validation



    console.log("candlogin");
  
    const userLogin={
        email:email,
        password:password
    }
    const xhr=new XMLHttpRequest();
    const url='http://jobappapi-env.eba-pzymhgwf.ap-south-1.elasticbeanstalk.com/candidate/login'

    xhr.open('POST',url);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange=()=>
    {
        if(xhr.readyState===4 && xhr.status===201)
        {
            console.log(xhr.responseText);
            window.location.href="./jobs.html";
          
        }
        else if(xhr.status===400 && xhr.readyState===4)
        {
            console.log(document.querySelector('.candLogin').innerHTML=JSON.parse(xhr.responseText).mes);
        }
    }

    xhr.send(JSON.stringify(userLogin));


})





document.querySelector('#candSignup').addEventListener('click',(e)=>
{
    e.preventDefault();
    const name=document.querySelector('#candName').value;
    const email=document.querySelector('#cand_email').value
    const password=document.querySelector("#cand_pass").value
    const number=document.querySelector("#candNum").value;
    //Apply validation
    if(name.length!==0 && email.length!==0 && password.length!==0 )
{

    const newUser={
        email:email,
        name:name,
        password:password,
        number:number
    }
    const xhr=new XMLHttpRequest();
    const url='http://jobappapi-env.eba-pzymhgwf.ap-south-1.elasticbeanstalk.com/candidate/signup'
    
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
    document.querySelector("#signErrorMessage").innerHTML="Please enter valid name or email or password"   
}

})