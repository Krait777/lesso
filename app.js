$('#fetchUser').click(function() {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            const user = data.results[0];
            const userInfo = `
                <h2>${user.name.first} ${user.name.last}</h2>
                <img src="${user.picture.large}" alt="Пользователь">
                <p>Email: ${user.email}</p>
                <p>Телефон: ${user.phone}</p>
            `;
            $('#userInfo').html(userInfo);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.error('Ошибка запроса: ', textStatus, errorThrown);
        }
    });
});
