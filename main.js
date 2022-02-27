
function save() {
    let userInput = 0;
    userInput = document.getElementById("input").value;
    document.getElementById("meters").textContent = userInput + " meters = " + (userInput * 3.38084).toFixed(3) + " feet";

    document.getElementById("feet").textContent = userInput + " feet = " + (userInput * 0.3048).toFixed(3) + " meters";
    
    document.getElementById("lts").textContent = userInput + " liters = " + (userInput * 0.264172).toFixed(3) + " gallons";
    
    document.getElementById("gallons").textContent = userInput + " gallons = " + (userInput * 3.78541).toFixed(3) + " liters";
    
    document.getElementById("kg").textContent = userInput + " kilos = " + (userInput * 2.20462).toFixed(3) + " pounds";
    
    document.getElementById("pounds").textContent = userInput + " pounds = " + (userInput * 0.453592).toFixed(3) + " kilos";
    
}
