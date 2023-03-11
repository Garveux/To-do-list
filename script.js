// add the input to the list
$("#btn").click(function () {
    var inp = document.getElementById("inp").value;
    if (!inp == "") {
        var ul = document.getElementById("ul");
        var li = document.createElement("li");
        var txt = document.createTextNode(inp);
        li.appendChild(txt);
        ul.appendChild(li);
        deleaff();
        document.getElementById("inp").value = "";
    }
    else {
        alert("write something");
    }

})
//add delete button to all activities
function deleaff() {
    for (var i = 0; i < document.getElementsByTagName("li").length; i++) {
        var btn = document.createElement("button");
        var x = document.createTextNode("X");
        btn.appendChild(x);
        document.getElementsByTagName("li")[i].appendChild(btn)
        btn.classList.add("btnn");

    }
}
// make the activity done or disable the activity
document.getElementById("ul").addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("done");
    }
    else if (ev.target.tagName === "BUTTON") {
        var sp = ev.target.parentElement;
        sp.style.display = "none";
    }
})



