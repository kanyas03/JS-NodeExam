const { join } = require('path');
const readline = require('readline');

const rl= readline.createInterface({
    input: process.stdin,
    output:process.stdout
});
let Expense=[];
let Amount=[];
let date=[];

function showmenu(){
   
    console.log(`===Expense Manager===
        1.Add Expensse
        2.View
        3.Exit`)
        rl.question(`choose option (1-3):`,handleOption);
    }

function handleOption(option){
    switch(option){
        case '1':
            addExpense();
        break;
        
        case '2':
            View();
        break;
        
        case '3':
            rl.close();
            console.log("exit")
        break;
        
        default:
            console.log("Enter a valid option")
        
        showmenu();
        break;
    }
}
function addExpense()
{ 
    rl.question("type of expense :",(Expensetype)=>{
        rl.question("Amount :",(Amountexpense)=>{
            rl.question("Date :",(ExpenseDate)=>{
                if(Expensetype==""||Amountexpense==""|ExpenseDate==""){
                    alert("Enter a valid input")
                }
                else
                {
                    Expense.push(Expensetype);
                    Amount.push(Amountexpense);
                    date.push(ExpenseDate)
                    console.log(`Expense Type:${Expense} Amount:${Amount} Date:${date}`)
                }
                showmenu();
            })
        })
    })
}       
function View()
{
    let expenselist=Expense.length?Expense.join(','):"Invalid"
    console.log(" list of Expense :",expenselist);
    showmenu();
}
showmenu();


    
   
