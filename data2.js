/**
 * Created by DuongPTH on 6/26/2017.
 */
var product_List = [
    {
        id: "001",
        name: "ao",
        price: 100,
        img: "resource/img1.JPG"
    },
    {
        id: "002",
        name: "quan",
        price: 200,
        img: "resource/img2.jpg"
    }
    // {
    //     id:"abc",
    //     name: "",
    //     price:,
    //     img: "resource/img.jpg"
    // },
    // {
    //     id:,
    //     name: "",
    //     price:,
    //     img: "resource/img.jpg"
    // },
];

function loadImage() {
    var div_productList = document.getElementById("productList");
    for (var i = 0; i < product_List.length; i++) {
        var tag = document.createElement("div");
        tag.style.backgroundImage = "url(" + product_List[i].img + ")";
        tag.id = i;
        tag.addEventListener("click", function () {
            var pos = this.id;
            var div_detail = document.getElementById("detail2");
            div_detail.innerHTML =
                "<br>code:" + product_List[pos].id +
                "<br>name:" + product_List[pos].name +
                "<br>price:" + product_List[pos].price;

            var divcha = document.getElementById("detail");

            divcha.style.display = "block";
        });
        div_productList.appendChild(tag);
    }
}

function closeDetail() {
    var tag = document.getElementById("detail");
    tag.style.display = "none";
}
