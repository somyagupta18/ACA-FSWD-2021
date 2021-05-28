async function gettoken()
{
    let url='http://127.0.0.1:12345/get_token';
    let load=await fetch(url);
    if(load.ok)
    {
        let json = await load.json();
        document.getElementById("tokenout").innerHTML= "Token: " + json.token;
    }
    else
    {
        alert("HTTP error:"+ load.status);
    }
}


async function register()
{
    let user = {
        username: document.getElementById("name").value,
        data: document.getElementById("data").value,
        token: document.getElementById("tokenin").value
      };
      
      let url='http://127.0.0.1:12345/register';
      let load=await fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      if(load.status==200)
        document.getElementById("savedata").innerHTML="Data is saved";
      let json = await load.json();
      if(json.error)
        document.getElementById("savedata").innerHTML = "Error : " + json.error;
      
        
        
  
}

async function getdata()
{
    let usertoken={
        token: document.getElementById("tokenno").value
    }
    let url='http://127.0.0.1:12345/get_data';
      let load=await fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(usertoken)
      });
    let json = await load.json();

    if(json.error==undefined){
                document.getElementById("getdata").innerHTML = "Username: " + json.username + "<br>" + "Data: " + json.data;}
    else{
                document.getElementById("error2").innerHTML = "Error : " + json.error;
                document.getElementById("getdata").innerHTML = "";
    }

}