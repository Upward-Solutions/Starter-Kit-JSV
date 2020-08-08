const fetchData = (request) => {
    let response
    fetch(`${API_URL}/${request.endpoint}`, {
        method: request.method,
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        referrerPolicy: 'same-origin',
        body: request.data
    })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            response = _Response(data.message, data.data, data.code)
        })
        .catch(error => {
            throw new Error('There has been a problem with your fetch operation:', error);
        });
}
