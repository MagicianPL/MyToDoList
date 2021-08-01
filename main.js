let errorsInfo; //Wiadomość z errorami albo zachętą w ToDo
let cityInput;
let dateInput;
let hourInput;
let infoInput;
let task; // Wstawiony tu będzie stworzony dynamicznie div task
let allTasks; //div z wszystkimi zadaniami

let btnSend;

let popUp;
let popupError;
//Niżej inputy w popupie
let cityPop; 
let datePop;
let hourPop;
let infoPop;

let btnAcceptPopup;
let btnCancelPopup;
//Poniżej zmienne do której pobiorę stringi z taska z textContentem od razu
let takeCity;
let takeDate;
let takeHour;
let takeInfo
//Niżej zmienne do których powkładam elementy w których są stringi z taska - wykorzystam w Fn acceptPop
let cityFromTask;
let dateFromTask;
let hourFromTask;
let infoFromTask;

const backgroundsTask = [ //Moja tablica z nazwami backgroundów
    "balloons.jpg", "childrens.jpg", "pencils.jpg", "pencils2.jpg", "smoke.jpg", "kid.jpg", "bubbles.jpg", "bubbles2.jpg"
];

const setBgTask = () => { //Fn ustawia losowe tło dla diva z zadaniem
    //Tworzę diva z tłem, którego wkładam w task
    const div = document.createElement("div");
    div.classList.add("bg-task");
    task.append(div);

    //Losuję tło dla tego diva
    const randomIndexNumber = Math.floor(Math.random() * (backgroundsTask.length - 1));
    //ustawiam tło
    div.style.backgroundImage = `url(${backgroundsTask[randomIndexNumber]})`;
};

const createTask = () => {          //Fn która tworzy zadanie
    cityValue = cityInput.value;
    dateValue = dateInput.value;
    hourValue = hourInput.value;
    infoValue = infoInput.value;

    if (cityValue === "" || dateValue === "" || hourValue === "") {
        errorsInfo.textContent = "Pole obowiązkowe nie zostało wypełnione!";
        errorsInfo.style.color = "red";
        errorsInfo.style.visibility = "visible";
    } else if (infoValue === "") {
        //Poniżej if z wyrażeniami regularnymi
        const regExpDate = /\d{1,2}\.\d{1,2}\.\d{2,4}/g
        const regExpHour = /\d{1,2}:\d{2}/g
        if (!dateValue.match(regExpDate) && !hourValue.match(regExpHour)) {
            errorsInfo.innerHTML = "Nieprawidłowy format daty!<br>Nieprawidłowy format godziny!";
            errorsInfo.style.color = "red";
            errorsInfo.style.visibility = "visible";
            console.log("zla data, zla godzina");
        } else if (!dateValue.match(regExpDate)) {
            errorsInfo.innerHTML = "Nieprawidłowy format daty!";
            errorsInfo.style.color = "red";
            errorsInfo.style.visibility = "visible";
            console.log("zla data");
        } else if (!hourValue.match(regExpHour)) {
            errorsInfo.innerHTML = "Nieprawidłowy format godziny!";
            errorsInfo.style.color = "red";
            errorsInfo.style.visibility = "visible";
            console.log("zla godzina");
        } else {
            task = document.createElement("div");
        task.classList.add("task");

        const pCity = document.createElement("p");
        pCity.classList.add("task-city");
        pCity.textContent = `Miasto:  ${cityValue}`;

        const pDate = document.createElement("p");
        pDate.classList.add("task-date");
        pDate.textContent = `Data:  ${dateValue}`;

        const pHour = document.createElement("p");
        pHour.classList.add("task-hours");
        pHour.textContent = `Godzina:  ${hourValue}`;

        const pInfo = document.createElement("p");
        pInfo.classList.add("task-info");
        pInfo.textContent = `Info:  ${infoValue}`;

        const buttons = document.createElement("div");
        buttons.classList.add("buttons-task");
        const editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        editBtn.textContent = "EDYTUJ";
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "USUŃ";
        buttons.append(editBtn, deleteBtn);

        task.append(pCity, pDate, pHour, pInfo, buttons);
        allTasks.append(task);

        setBgTask(); //Fn losuje tło dla task

        errorsInfo.style.visibility = "hidden";
        // Poniżej czyszczę inputy
        cityInput.value = "";
        dateInput.value = "";
        hourInput.value = "";
        infoInput.value = "";
        };
        
    } else {
        //Poniżej if z wyrażeniami regularnymi
        const regExpDate = /\d{1,2}\.\d{1,2}\.\d{2,4}/g
        const regExpHour = /\d{1,2}:\d{2}/g
        if (!dateValue.match(regExpDate) && !hourValue.match(regExpHour)) {
            errorsInfo.innerHTML = "Nieprawidłowy format daty!<br>Nieprawidłowy format godziny!";
            errorsInfo.style.color = "red";
            errorsInfo.style.visibility = "visible";
        } else if (!dateValue.match(regExpDate)) {
            errorsInfo.innerHTML = "Nieprawidłowy format daty!";
            errorsInfo.style.color = "red";
            errorsInfo.style.visibility = "visible";
        } else if (!hourValue.match(regExpHour)) {
            errorsInfo.innerHTML = "Nieprawidłowy format godziny!";
            errorsInfo.style.color = "red";
            errorsInfo.style.visibility = "visible";
        } else {
            task = document.createElement("div");
        task.classList.add("task");

        const pCity = document.createElement("p");
        pCity.classList.add("task-city");
        pCity.textContent = `Miasto:  ${cityValue}`;

        const pDate = document.createElement("p");
        pDate.classList.add("task-date");
        pDate.textContent = `Data:  ${dateValue}`;

        const pHour = document.createElement("p");
        pHour.classList.add("task-hours");
        pHour.textContent = `Godzina:  ${hourValue}`;

        const pInfo = document.createElement("p");
        pInfo.classList.add("task-info");
        pInfo.textContent = `Info:  ${infoValue}`;

        const buttons = document.createElement("div");
        buttons.classList.add("buttons-task");
        const editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        editBtn.textContent = "EDYTUJ";
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "USUŃ";
        buttons.append(editBtn, deleteBtn);

        task.append(pCity, pDate, pHour, pInfo, buttons);
        allTasks.append(task);

        setBgTask(); //Fn losuje tło dla task

        errorsInfo.style.visibility = "hidden";
        // Poniżej czyszczę inputy
        cityInput.value = "";
        dateInput.value = "";
        hourInput.value = "";
        infoInput.value = "";
        };
        
    };
};

const acceptPop = () => { //Wykonuje się, kiedy jest kliknięte akcpetuj w popupie
    const regExpDate = /\d{1,2}\.\d{1,2}\.\d{2,4}/g
    const regExpHour = /\d{1,2}:\d{2}/g

    if (cityPop.value === "" || datePop.value === "" || hourPop.value === "") {
        popupError.textContent = "Pola z gwiazdką są wymagane!";
    } else if (!datePop.value.match(regExpDate) && !hourPop.value.match(regExpHour)) {
        popupError.textContent += " - Zły format daty i godziny!";
    } else if (!datePop.value.match(regExpDate) || !hourPop.value.match(regExpHour)) {
        popupError.textContent += " - Zły format daty lub godziny!";
    } else {
    cityFromTask.textContent = `Miasto: ${cityPop.value}`;
    dateFromTask.textContent = `Data: ${datePop.value}`;
    hourFromTask.textContent = `Godzina: ${hourPop.value}`;
    infoFromTask.textContent = `Info: ${infoPop.value}`;
    popUp.style.display = "none";
    };
};

const closePopup = () => { //Fn zamyka popup
    popUp.style.display = "none";
    cityPop.value = "";
    datePop.value = "";
    hourPop.value = "";
    infoPop.value = "";
};

const checkForBtnClick = (e) => {  /*Funkcja sprawdza czy kliknięto edit czy delete*/                          
    if (e.target.classList.contains("delete")) {
        e.target.closest("div.task").remove();
        const createdTasks = document.querySelectorAll(".task");
        if (createdTasks.length === 0) {
            errorsInfo.textContent = "Wpisz dane - Twoje zadanie pojawi się poniżej!";
            errorsInfo.style.color = "green";
            errorsInfo.style.visibility = "visible";
        };
    } else if (e.target.classList.contains("edit")) {
        popUp.style.display = "block";
        (() => {    //Fn która pobiera dane z taska i wstawia w popup
            cityFromTask = e.target.closest(".task").querySelector(".task-city");
            takeCity = e.target.closest(".task").querySelector(".task-city").textContent;
            /*Powyżej najbliższy przodek targetu .task, a w nim .task-city i jego text*/ 
            cityPop.value = takeCity.slice(8); //Miasto: Bytom - odcinam Miasto: i jest Bytom
            
            dateFromTask = e.target.closest(".task").querySelector(".task-date");
            takeDate = e.target.closest(".task").querySelector(".task-date").textContent;
            datePop.value = takeDate.slice(6);
    
            hourFromTask = e.target.closest(".task").querySelector(".task-hours")
            takeHour = e.target.closest(".task").querySelector(".task-hours").textContent;
            hourPop.value = takeHour.slice(9);
    
            infoFromTask = e.target.closest(".task").querySelector(".task-info");
            takeInfo = e.target.closest(".task").querySelector(".task-info").textContent;
            if (takeInfo !== "") {
                infoPop.value = takeInfo.slice(6);
            } else 
            infoPop.value = takeInfo;
    })();
    };
};

const prepareDomElements = () => {
    errorsInfo = document.querySelector(".errors");
    cityInput = document.querySelector("#city");
    dateInput = document.querySelector("#date");
    hourInput = document.querySelector("#hour");
    infoInput = document.querySelector("#add-info");
    btnSend = document.querySelector(".toDo button");
    allTasks = document.querySelector(".tasks");
    popUp = document.querySelector(".pop-up");
    cityPop = document.querySelector("#pop-city");
    datePop = document.querySelector("#pop-date");
    hourPop = document.querySelector("#pop-hour");
    infoPop = document.querySelector("#popup-info");
    btnAcceptPopup = document.querySelector(".pop-up .accept");
    btnCancelPopup = document.querySelector(".pop-up .cancel");
    popupError = document.querySelector(".popup-error");
};

const eventListeners = () => {
    btnSend.addEventListener("click", createTask);
    allTasks.addEventListener("click", checkForBtnClick);
    btnAcceptPopup.addEventListener("click", acceptPop);
    btnCancelPopup.addEventListener("click", closePopup);
};

const mainFunction = () => {
    prepareDomElements();
    eventListeners();
};

document.addEventListener("DOMContentLoaded", mainFunction);