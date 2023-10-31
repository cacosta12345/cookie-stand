function Store(name,min, max, avg, estimatedSales){
  this.name= name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.estimatedSales = estimatedSales;
}

let seattle = new Store('Seattle',23,65,6.3, []);
let tokyo = new Store('Tokyo',3,24,1.2,[]);
let dubai = new Store('Dubai',11,38,3.7, []);
let paris = new Store('Paris',20,38,2.3,[]);
let lima = new Store('Lima',2,16,4.6,[]);

let hoursOpen = [
  '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'
];


function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

Store.prototype.renderStore = function(store){
  const rootElement = document.getElementById('root');

  const storeSection = document.createElement('section');
  rootElement.appendChild(storeSection);

  const firstTitle = document.createElement('h2');
  firstTitle.textContent = store.name;
  storeSection.appendChild(firstTitle);

  const storeDataList = document.createElement('ul');
  storeSection.appendChild(storeDataList);

  let total = 0;
  for( let i=0; i < hoursOpen.length; i++ ) {
    total += store.estimatedSales[i];
    const est = document.createElement('li');
    est.textContent = `${hoursOpen[i]}: ${store.estimatedSales[i]}`;
    storeDataList.appendChild(est);
  }

  const totalElement = document.createElement('li');
  totalElement.textContent = `Total: ${total}`;
  storeDataList.appendChild(totalElement);
};

Store.prototype.estimateSales = function(currentStore){
  let estimatedSales = [];
  for (let i = 0; i < hoursOpen.length; i++) {
    const numCustomers = random(currentStore.min, currentStore.max);
    const hourlySales = Math.round(numCustomers * currentStore.avg);
    estimatedSales.push(hourlySales);
  }
  return estimatedSales;
};

let stores = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; i < stores.length; i++) {
  let currentStore = stores[i];
  currentStore.estimatedSales = currentStore.estimateSales(currentStore);
  currentStore.renderStore(currentStore);
}
