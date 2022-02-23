/* 

TODO:
- select all important elements 
- create a function for randomly created users
- create another function for display users 
- now work with change tab
*/

/* step 1 - select all important elements  */
const cardWrapper = document.querySelector('.wrapper');

/* step 2 - create a function for randomly created users  */
const randomUsers = async () =>{
    let response = await fetch(`https://randomuser.me/api/`);
    let data = await response.json();
    displayUsers(data.results[0]);
}



/* step 3 - create another function for display users  */
const displayUsers = (user) =>{
    console.log(user)

    // for user address 
    let {country, state, city} = user.location;
    let {number, name} = user.location.street;
    let cartTag = `
    <div class="avatar">
        <img src="${user.picture.large}" alt="image for users">
    </div>
    <div class="user-details">
        <div class="name-info">
            <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
            <span class="email">${user.email}</span>
        </div>
        <div class="address">
            <div class="address-header">
                <ul class="header-title">
                    <li class="tab-button active">Location</li>
                    <li class="tab-button">Login</li>
                    <li class="tab-button">Personal</li>
                </ul>
                <ul class="display-info">
                    <li class="location">
                        <ul>
                            <li>Street: <span>${number}, ${name}</span></li>
                            <li>City : <span>${city}</span> </li>
                            <li>State : <span>${state}</span></li>
                            <li>Country : <span>${country}</span></li>
                        </ul>
                    </li>
                    <li class="login-info">
                        <ul>
                            <li>Cell: <span>${user.cell}</span></li>
                            <li>Phone: <span>${user.phone}</span></li>
                            <li>Email: <span>${user.email}</span></li>
                            <li>Password: <span>${user.login.password}</span></li>
                        </ul>
                    </li>
                    <li class="personal">
                        <ul>
                            <li>Date of Birth <span>${user.dob.date}</span></li>
                            <li>Age <span>${user.dob.age}</span></li>
                            <li>Gender <span>${user.gender}</span></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>`;
    cardWrapper.innerHTML = cartTag;
}

/* step 4 now work with change tab  */
const headerTabs = document.getElementsByClassName('tab-button');
// const headerTitle = document.querySelectorAll(".header-title li");
// console.log(headerTitle)
console.log(headerTabs);




/* last step for calling all function  */
randomUsers();