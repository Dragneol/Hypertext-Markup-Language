/**
 * Created by DuongPTH on 6/28/2017.
 */
function init() {
    //make count = 0, run when load index
    var count = window.localStorage.getItem("count");
    if (count == null) window.localStorage.setItem("count", 0);
}

function find(code) {
    var c = document.localStorage.getItem("count");
    if (c != null) {
        for (var i = 1; i <= c; i++) {
            var v = window.localStorage.getItem(i);
            if (v != null) {
                var arr = v.split(',');
                if (arr[0] == code)
                    return i;
            }
        }
    }
    retrun - 1;
}

function add(code, name, img, price) {
    var kq = find(code);
    if (kq == -1) {
        var c = window.localStorage.getItem("count");
        c++;
        window.localStorage.setItem(c,
            code + ',' +
            name + ',' +
            img + ',' +
            price + '1');
        window.localStorage.setItem("count", c);
        alert("added!");
    } else alert("already added");
}

function show() {
    var s = "<table><caption>Gio hang cua ban</caption>";
    s += "<tr>";
    s += "<th>Code</th>";
    s += "<th>Name</th>";
    s += "<th>IMG</th>";
    s += "<th>Price</th>";
    s += "<th>Amount</th>";
    s += "<th>Del</th>";
    s += "</tr>";

    var c = window.localStorage.getItem("count");
    var sum = 0;
    if (c != null) {
        for (var i = 1; i <= c; i++) {
            var v = window.localStorage.getItem(i);
            if (v != null) {
                var arr = v.split(",");
                s = s + "<tr>";
                s = s + "<td>" + arr[0] + "</td>";
                s = s + "<td>" + arr[1] + "</td>";
                s = s + "<td><img src='" + arr[2] + "'/></td>";
                s = s + "<td>" + arr[3] + "</td>";
                s = s + "<td><input type='number' value='" + arr[4] + "' min='1' max='10' onchange='suaSL(\"" + arr[0] + "\",this)'></td>";
                s = s + "<td><input type='button' value='xoa' onclick='bo(\"" + arr[0] + "\")'/></td>";
                s = s + "</tr>";
                sum = sum + arr[3] * arr[4];
            }
        }

        s = s + "</table>";
        s = s + "<p>Tong tien can thanh toan: " + sum + " vnd</p>";
        var tag = document.getElementById("detail");
        tag.innerHTML = s;
        var tag_giohang = document.getElementById("cart");
        tag_giohang.style.display = "block";
    }
}

function edit(code, tag) {
    var kq = find(i);
    if (kq > 0) { // find one needed
        var v = window.localStorage.getItem(kq);
        if (v != null) {
            var arr = v.split(",");
            arr[4] = tag.value;
            window.localStorage.setItem(kq,
                arr[0] + "," +
                arr[1] + "," +
                arr[2] + "," +
                arr[3] + "," +
                arr[4]);
            show();
        }
    }
}

function del(code) {
    var kq = find(code);
    if (kq > 0) {
        var confirm = window.confirm("Del for sure?");
        window.localStorage.removeItem(kq);
        show();
    }
}

function finish() {
    alert("Thank you");
    window.localStorage.clear();
    window.location.repalce("");
}