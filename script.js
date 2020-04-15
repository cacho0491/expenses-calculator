{
    var totalIncome = [];
    var totalExpense = [];
    var totalLeft = 0;
    var itemType = "inc";
    var sumIncome = 0;
    var sumExpense = 0;

    function typeSelection(item){
        const selectedItem = item.options[item.selectedIndex].id;
        if(selectedItem == "exp" ){
            console.log("yes")
            document.getElementById("type").style.border = "2px solid red";
            document.getElementById("type_name").style.border = "2px solid red";
            document.getElementById("type_price").style.border = "2px solid red";
            itemType = "exp";
        } else {
            document.getElementById("type").style.border = "2px solid rgb(2, 125, 47)";
            document.getElementById("type_name").style.border = "2px solid rgb(2, 125, 47)";
            document.getElementById("type_price").style.border = "2px solid rgb(2, 125, 47)";
            itemType = "inc";
        }
    }

    function addItem(){
        const itemName = document.getElementById("type_name").value;
        const itemPrice = document.getElementById("type_price").value;
        
        console.log(itemPrice, itemName);
        if(itemType == "inc"){
            totalIncome.push({[itemName]: itemPrice});
            createNewElement(itemName, itemPrice, "inc");
            document.getElementById("type_name").value = "";
            document.getElementById("type_price").value = "";
            document.getElementById("type_name").focus();
            showCalcs(totalIncome, "income");
        } else {
            totalExpense.push({[itemName]: itemPrice});
            createNewElement(itemName, itemPrice, "exp");
            document.getElementById("type_name").value = "";
            document.getElementById("type_price").value = "";
            document.getElementById("type_name").focus();
            showCalcs(totalExpense, "expense");
        }
    }

    function createNewElement(idName, price, type) {
        const li = document.createElement("LI");
        const button = document.createElement("BUTTON");
        li.setAttribute("id", idName);
        button.setAttribute("class", "delete-item")
        button.setAttribute("onclick", `deleteItem(${idName},${type})`);
        button.innerHTML = "X";
        li.innerHTML = idName + " " + price;
        //button.style.display = "none";
        li.appendChild(button);
        console.log(totalIncome)
        document.getElementById(`${type}_elements`).appendChild(li);
    }

    function showCalcs(total, type){
        let sum = 0;
        for(let item of total){
            sum += Number(Object.values(item));
            if(type === "income"){
                sumIncome = sum;
            } else {
                sumExpense = sum;
            }
        }
        document.getElementById("total__"+type).innerHTML = "£" + sum;
        document.getElementById("total_left").innerHTML = "£" + (sumIncome - sumExpense);
    }

    function deleteItem(id, type){
        const item = id.id;
        if(type.id === "inc"){
            for(let i of totalIncome){
                
                if(String(Object.keys(i)) === item){
                    const index = totalIncome.indexOf(i);
                    totalIncome.splice(index, 1);
                    addItem();
                    removeHTML(item);
                }
            }
        } else {
            for(let i of totalExpense){
                
                if(String(Object.keys(i)) === item){
                    const index = totalExpense.indexOf(i);
                    totalExpense.splice(index, 1);
                    addItem();
                    removeHTML(item);
                } 
        //console.log(type.id);
        //document.getElementById(id.id).innerHTML = "hey";
            }
        }
    }

    function removeHTML(id){
        document.getElementById(id).remove();
    }


// document.getElementById("income__name").focus();
// var totalIncome = 0;
// var totalExpense = 0;
// var totalLeft = 0;

// function addTotal(name, price) {
//     totalIncome = totalIncome + Number(price);
//     document.getElementById("total__income").innerHTML = totalIncome;
//     addToIncomeList(name, price);
//     calculateTotal();
// }

// function expenseCalc(name, price){
//     totalExpense = totalExpense + Number(price);
//     document.getElementById("total__expense").innerHTML = totalExpense;
//     calculateTotal()
//     addToExpenseList(name, price);
// }

// function addToIncomeList(name, price) {
//     const nameToAppend = `INCOME -- ${name} = £${price}`;
//     const li = document.createElement("LI");
//     const textNode = document.createTextNode(nameToAppend);
//     li.appendChild(textNode);

//     const btn = document.createElement("BUTTON");
//     btn.innerHTML = "X";

//     li.appendChild(btn);
//     li.setAttribute("id", name);

//     document.getElementById("elements").appendChild(li);
// }

// function addToExpenseList(name, price){
//     const nameToAppend = `EXPENSE -- ${name} = £${price}`;
//     const li = document.createElement("LI");
    
//     const textNode = document.createTextNode(nameToAppend);
//     li.appendChild(textNode);

//     const btn = document.createElement("BUTTON");
//     btn.innerHTML = "X"
//     btn.setAttribute("onClick", `deleteItem()`);

//     li.appendChild(btn)
//     li.setAttribute("id", name)

//     document.getElementById("elements").appendChild(li);
// }

// function calculateTotal() {
//     const total = totalIncome - totalExpense;
//     document.getElementById("total_left").innerHTML = total;
// }

// document.getElementById("income__addBtn").addEventListener("click", function() {
//     let name = document.getElementById("income__name").value;
//     let price = document.getElementById("income__price").value;
//     addTotal(name, price);
//     name =  document.getElementById("income__name").value = "";
//     price =  document.getElementById("income__price").value = "";
    
//     console.log(price)
// });

// document.getElementById("expense__addBtn").addEventListener("click", function(){
//     let name = document.getElementById("expense__name").value;
//     let price = document.getElementById("expense__price").value;
//     expenseCalc(name, price);
//     name = document.getElementById("expense__name").value = "";
//     price = document.getElementById("expense__price").value = "";
// });

// delete item function






}