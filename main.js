function save(){
    player_1 = document.getElementById("Input_1").value;
    player_2 = document.getElementById("Input_2").value;

    localStorage.setItem("player_1 name" , player_1);
    localStorage.setItem("player_2 name", player_2);
    window.location ="2nd_page.html";
}
