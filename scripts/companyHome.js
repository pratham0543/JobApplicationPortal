document.querySelector('#postBtn').addEventListener('click',(e)=>
{
    e.preventDefault();
    const comp_name=document.querySelector('#comp_name').value;
    const pos=document.querySelector('#pos').value;
    const skills=document.querySelector('#skills').value;
   
    const job_desc=document.querySelector('#job_desc').value;


    if(comp_name.length!==0 && pos.length!==0 && skills!==0 )
    {
    const newJob={
           comp_name:comp_name,
            pos:pos,
            skills:skills,
            job_desc:job_desc,
       
    }

    const xhr=new XMLHttpRequest();
    const url='http://localhost:5001/company/postjob'

    xhr.open('POST',url);
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange=()=>
    {
        if(xhr.readyState===4 && xhr.status===201)
        {
            document.querySelector('.job-status').classList.add("text-success")
            document.querySelector('.job-status').classList.remove("text-danger")
            document.querySelector('.job-status').innerHTML=JSON.parse(xhr.responseText).mes;
          
        }
        else if(xhr.status===400 && xhr.readyState===4)
        {
            console.log(document.querySelector('.job-status').innerHTML=JSON.parse(xhr.responseText).mes);
        }
    }

    xhr.send(JSON.stringify(newJob));
    }
    else
    {
        document.querySelector('.job-status').classList.add("text-danger")
        document.querySelector('.job-status').classList.remove("text-success")
        document.querySelector('.job-status').innerHTML="Please enter valid information";
    }



})