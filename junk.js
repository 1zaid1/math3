let l = 0, r = 10**6+1, cnt =1;
document.getElementById("dv").style.height = window.innerHeight-100+"px";
document.getElementById("dv").style.width = window.innerWidth+"px";

function change(d, s) {
    document.getElementById(d).innerHTML = s;
}

function reset() {
    l = 0, r = 10**6+1, cnt = 0;
    change("guess", String(Math.floor((l+r)/2))+"?");
    change("count", "عدد المحاولات: " + String(++cnt));
}

function up() {
    l = Math.floor((l+r)/2);
    change("guess", String(Math.floor((l+r)/2))+"?");
    change("count", "عدد المحاولات: " + String(++cnt));
}

function down() {
    r = Math.floor((l+r)/2);
    change("guess", String(Math.floor((l+r)/2))+"?");
    change("count", "عدد المحاولات: " + String(++cnt));
}
