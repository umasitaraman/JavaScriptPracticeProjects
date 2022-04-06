let data = [
    {
        name: 'Mirabel',
        age: '20'
    },
    {
        name: 'Luisa',
        age: '28'
    },
    {
        name: 'Isabela',
        age: '22'
    },
    {
        name: 'Pepa',
        age: '35'
    },
    {
        name: 'Bruno',
        age: '40'
    },
    {
        name: 'Camilo',
        age: '18'
    }
];

const info = document.querySelector('#info')

let details = data.map(function(item) {
    return (
        '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>'
    )
});

info.innerHTML = details.join('\n');