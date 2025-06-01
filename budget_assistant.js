
let startupName = "LuxTech Innovations";  
let initialCapital = 10000;              
let monthlyRevenue = 7500;                
let monthlyExpenses = 5000;               


let netCashFlow = monthlyRevenue - monthlyExpenses;    
let currentBalance = initialCapital + netCashFlow;     
let isProfitable = netCashFlow > 0;                    


console.log("Startup Name: " + startupName);
console.log("Net Monthly Cash Flow: $" + netCashFlow);
console.log("Current Balance: $" + currentBalance);
console.log("Profitability Status: " + isProfitable);
