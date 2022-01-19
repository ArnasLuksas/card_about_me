const body = document.querySelector('body');

const header = document.createElement('header');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');

const main = document.createElement('main');
const section = document.createElement('section');
const emailSpan = document.createElement('span');
const webSpan = document.createElement('span');
const locSpan = document.createElement('span');


const card = (fname, lname, role, email, web, city, country) => {

    h1.textContent = `${fname} ${lname}`;
    h1.setAttribute('class', 'nameSurname')
    h2.textContent = `${role}`;
    h2.setAttribute('class', 'role')
    body.appendChild(header);
    header.appendChild(h1);
    header.appendChild(h2);


    body.appendChild(main);
    main.appendChild(section);

    emailSpan.textContent = `Email: ${email}`;
    emailSpan.setAttribute('class', 'email');
    webSpan.innerHTML = `Website: <a href="https://${web}" target="_blank">${web}</a>`;
    webSpan.setAttribute('class', 'website');
    locSpan.textContent = `Location: ${city}, ${country}`;
    locSpan.setAttribute('class', 'location');
    section.appendChild(emailSpan);
    section.appendChild(webSpan);
    section.appendChild(locSpan);

};

card('Arnas', 'Lukšas', 'Web Developer', 'arnasluksas@gmail.com', 'www.arnasluksas.lt', 'Vilnius', 'Lithuania');


















