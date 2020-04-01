fetch('http://localhost:4000/users')
.then(response => response.json())
.then(console.log)

const newUserForm = document.getElementById('new-user-form')

newUserForm.addEventListener('submit', e => {
    e.preventDefault()
    const formData = new FormData(newUserForm)
    const name = formData.get('name')
    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')
    fetch('http://localhost:3000/users', {
        method: "POST", 
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: {
                name: name,
                username: username,
                email: email,
                password: password
            }

        })
    })
})