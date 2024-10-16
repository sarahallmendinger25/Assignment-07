function CalculatePrice(){
    let dogSize = document.getElementById("dogSize").value;
    let Days = document.getElementById("Days").value;
    let totalCost = parseInt(dogSize) * Days;
    let taxCost = .047 * totalCost
    let gradTotal = (taxCost + totalCost)
    document.getElementById("answer").textContent = `Cost: $${totalCost.toFixed(2)}`;
    document.getElementById("tax").textContent = `Tax: $${taxCost.toFixed(2)}`;
    document.getElementById("total").textContent = `Total Cost: $${gradTotal.toFixed(2)}`;
}