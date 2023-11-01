function Store(name,min, max, avg, estimatedSales){
  this.name= name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.estimatedSales = estimatedSales;
}

let totals = new Array().fill(0);

let seattle = new Store('Seattle',23,65,6.3, []);
let tokyo = new Store('Tokyo',3,24,1.2,[]);
let dubai = new Store('Dubai',11,38,3.7, []);
let paris = new Store('Paris',20,38,2.3,[]);
let lima = new Store('Lima',2,16,4.6,[]);

let hoursOpen = [
  '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'
];

let stores = [seattle, tokyo, dubai, paris, lima];

function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// render to table
Store.prototype.renderStore = function(){
  let body = document.getElementById('stores');
  let storeRow = document.createElement('tr');
  body.appendChild(storeRow);

  let nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  storeRow.appendChild(nameCell);
  let total = 0;
  for( let i = 0; i < hoursOpen.length; i++ ) {
    total += this.estimatedSales[i];
    let cell = document.createElement('td');
    cell.textContent = `${this.estimatedSales[i]}`;
    storeRow.appendChild(cell);
  }
  // grandTotal += total;
  const totalElement= document.createElement('td');
  totalElement.textContent = `${total}`;
  storeRow.appendChild(totalElement);
};

//gets random numbers for each city
Store.prototype.estimateSales = function(currentStore){
  let estimatedSales = [];
  for (let i = 0; i < hoursOpen.length; i++) {
    const numCustomers = random(currentStore.min, currentStore.max);
    const hourlySales = Math.round(numCustomers * currentStore.avg);
    estimatedSales.push(hourlySales);
  }
  return estimatedSales;
};

for (let i = 0; i < stores.length; i++) {
  let currentStore = stores[i];
  currentStore.estimatedSales = currentStore.estimateSales(currentStore);
  currentStore.renderStore(currentStore);
}
// last row - total hourly totals
function hourlyTotals(){
  for (let i = 0; i < hoursOpen.length; i++) {
    let ourTotal = 0;
    for (let j = 0; j < stores.length; j++) {
      ourTotal += stores[j].estimatedSales[i];
    }
    totals.push(ourTotal);
  }
  console.log(totals);
  return totals;
}
function renderHourlyTotals(){
  let totals = hourlyTotals();
  let body = document.getElementById('hourTotals');
  let row = document.createElement('tr');
  body.appendChild(row);
  let nameCell = document.createElement('td');
  nameCell.textContent = 'Hourly Totals For All Locations';
  row.appendChild(nameCell);
  for (let i = 0; i < totals.length; i++) {
    let cell = document.createElement('td');
    cell.textContent = `${totals[i]}`;
    row.appendChild(cell);
  }

  //reduce method needs a function and starting number as parameters//( (a,b) => a+b, 0  )
  let grandTotal = totals.reduce((accumulator, currentValue)=>accumulator+ currentValue, 0);
  let grandTotalCell = document.createElement('td');
  grandTotalCell.textContent= `${grandTotal}`;
  row.appendChild(grandTotalCell);
}
renderHourlyTotals();


