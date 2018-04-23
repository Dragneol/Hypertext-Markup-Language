/**
 * Created by DuongPTH on 6/14/2017.
 */
var sp;
var sp2;
function getData() {

}
function product(code, name, price, image) {
    this.code = code;
    this.name = name;
    this.price = price;
    this.image = image;

    this.display = function () {
        return "code:" + this.code
            + "<br> name:" + this.name
            + "<br> price:" + this.price
            + "<br><img src='" + this.image + "'/>";
    }

    this.output = getData;
}

function init() {
    sp = new product("s1", "poke", 120, "resource/ghost.jpg");
    view("sp1");
    sp2 = new product("s1", "poke", 120, "resource/ghost.jpg");
}

function view(id) {
    var t = document.getElementById(id);
    t.innerHTML = sp.display();
}
