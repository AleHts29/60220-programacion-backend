function testRequest() {
    console.log("Llamando API:");
    fetch('http://localhost:8080/test', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(result => {
        if (result.status === 200) {
            result.json()
                .then(json => {
                    console.log(json)
                });
        } else {
            console.log(result);
            alert("Error al conectar con el API.");
        }
    })
};