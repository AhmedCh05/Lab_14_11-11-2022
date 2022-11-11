function MyFunction() {
    var first, second;
    var res = document.getElementById("form1");
    first = res.elements[0].value;
    second = res.elements[1].value;
    console.log(first, second)

    document.getElementById("F").innerHTML = first;
    document.getElementById("L").innerHTML = second;
}