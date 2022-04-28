function formatPpl(ppl) {
    if (ppl == 1) {
        return ppl + " person";
    } else {
        return ppl + " people";
    }
}
function formatMoney(money) {
    money = Math.ceil(money * 100) / 100;
    return `$${money.toFixed(2)}`;
}
function update() {
    let bill = Number(document.getElementById("Bill").value)
    let tip = Number(document.getElementById("TipInput").value)
    let split = Number(document.getElementById("SplitInput").value)
    let billEach = bill / split
    let tipAmount = bill * (tip / 100)
    let tipEach = tipAmount / split
    let newBillEach = billEach + tipEach
    document.getElementById("TipPercent").innerHTML = tip + "%"
    document.getElementById("TipValue").innerHTML = formatMoney(tipAmount)
    document.getElementById("TotalWithTip").innerHTML =formatMoney(Number(bill + tipAmount))
    document.getElementById("SplitValue").innerHTML = formatPpl(split)
    document.getElementById("BillEach").innerHTML = formatMoney(newBillEach)
    document.getElementById("TipEach").innerHTML = formatMoney(tipEach)
}

document.querySelectorAll(".call").forEach(item => {
    item.addEventListener("input", update)
})