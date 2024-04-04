const form = document.getElementById('loginForm');

form.addEventListener('submit',e=>{
    e.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value,key)=>obj[key]=value);
    fetch('/api/extend/users/login',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(result=>{
        if(result.status===200){
            result.json()
            .then(json=>{
                console.log(json);
                localStorage.setItem('authToken', json.access_token);
                localStorage.setItem('USER_ID', json.id);
                alert("Login realizado con exito!");
                window.location.replace('/users');
            });
        } else if (result.status === 401){
            console.log(result);
            alert("Login invalido revisa tus credenciales!");
        }
    })
})