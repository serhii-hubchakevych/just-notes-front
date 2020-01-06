async function getContent() {
    try {
        return fetch('https://pure-fjord-08536.herokuapp.com/just-notes-admin-panel',

            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then(response => response.json()).then((response) => {
                return response;  
            }).catch((error) => {
                return undefined;
            })
    }
    catch (error) {
        alert('Auth User API error')
        console.log('Auth User API error', error)
    }
}

async function authAdminPanel(loginData) {
    try {
        return fetch('https://pure-fjord-08536.herokuapp.com/admin',

            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData)
            }).then(response => response.json()).then((response) => {
                return response;
            }).catch((error) => {
                console.log("Error with ..." + error);
            })
    }
    catch (error) {
        alert('Auth User API error')
        console.log('Auth User API error', error)
    }
}

async function sendAdminData(adminData) {
    let token = localStorage.getItem('Token')
    let a = "Bearer "+token
    try {
        return fetch('https://pure-fjord-08536.herokuapp.com/just-notes-admin-panel',
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': a
                },
                body: JSON.stringify(adminData)
            }).then(response => response.json()).then((response) => {
                return response;
            }).catch((error) => {
                return undefined;
            })
    }
    catch (error) {
        alert('Auth User API error')
        console.log('Auth User API error', error)
    }
}

export { getContent };
export { authAdminPanel };
export { sendAdminData };