document.getElementById('generate-btn').addEventListener('click', function() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const name = `${user.name.first} ${user.name.last}`;
            const email = user.email;
            const age = user.dob.age;
            const picture = user.picture.large;

            document.getElementById('user-info').innerHTML = `
                <img src="${picture}" alt="User Picture" style="border-radius: 50%; width: 100px; height: 100px;">
                <p><strong>Имя:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Возраст:</strong> ${age}</p>
            `;
        })
        .catch(error => console.error('Ошибка:', error));
});