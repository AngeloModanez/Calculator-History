function calc(op) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num1").value);
    var output = 0;

    switch (op) {
        case '+': output = num1 + num2; break;
        case '-': output = num1 - num2; break;
        case '/': output = num1 / num2; break;
        case '*': output = num1 * num2; break;
    }

    document.getElementById("output").value = output

    var newHistory = "<p>" + num1 + " " + op + " " + num2 + " = " + output + "</p>";
    var history = document.getElementById("history");

    history.innerHTML = newHistory + history.innerHTML;

    if (history.children.length > 10) {
        history.removeChild(history.childNodes[10]);
    }
}