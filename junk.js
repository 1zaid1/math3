let l = 1, r = 10**6, cnt = 0;

function change(d, s) {
    document.getElementById(d).innerHTML = s;
}

function reset() {
    l = 1, r = 10**6, cnt = 0;
    change("guess", String(Math.floor((l+r)/2))+"?");
    change("count", String(cnt));
}

function up() {
    l = Math.floor((l+r)/2);
    change("guess", String(Math.floor((l+r)/2))+"?");
    change("count", String(++cnt));
}

function down() {
    r = Math.floor((l+r)/2);
    change("guess", String(Math.floor((l+r)/2))+"?");
    change("count", "عدد المحاولات: " + String(++cnt));
}
