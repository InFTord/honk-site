function openPage(evt, cityName) {
    // Обьявление всех элементов
    var i, tabcontent, tablinks;

    // Нахождение элементов с классом tabcontent и их скрывание
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }



    // Нахождение всех элементов с классом tabcontent и удаление у них класса active
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Показывать вкладку которая открыта на данный момент и добавление к нему класса active
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
    
}

// Нахождение элемента с id "defaultOpen" и нажатие на него
    document.getElementById("defaultOpen").click();