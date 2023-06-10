function Sum() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("Result").innerHTML = "Please,enter the number.";
        return;
    }

    let sum = 0;
    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    document.getElementById("Result").innerHTML = "Cəm: " + sum;
}


  function Size() {
    let element = document.getElementById("Test");
    let Widths = element.offsetWidth;
    let Heights = element.offsetHeight;

    let newWidth = Widths + 50;
    let newHeight = Heights + 20;

    element.style.width = newWidth + "px";
    element.style.height = newHeight + "px";
  }