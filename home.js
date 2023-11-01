function Store(name, address, hoursOpen, contactInfo){
  this.name = name;
  this.address = address;
  this.hoursOpen = hoursOpen;
  this.contactInfo = contactInfo;
}

let seattle = new Store('Seattle', '111 seattle ave', '6am - 6pm', '111-222-3333');
let tokyo = new Store('Tokyo', '222 tokyo blvd', '6am - 6pm', '123-456-7891');
let dubai = new Store('Dubai', '333 dubai rd', '6am - 6pm', '128-296-6541');
let paris = new Store('Paris', '605 paris st', '6am - 6pm', '123-456-7891');
let lima = new Store('Lima', '852 lima ave', '6am - 6pm', '987-654-');

let stores = new Array().fill(0);

stores.push(seattle);
stores.push(tokyo);
stores.push(dubai);
stores.push(paris);
stores.push(lima);



Store.prototype.renderStore = function(){
  let rootElement = document.getElementById('root');
  let storeSection = document.createElement('section');
  rootElement.appendChild(storeSection);

  let firstTitle = document.createElement('h2');
  firstTitle.textContent = this.name;
  storeSection.appendChild(firstTitle);

  let storeInfo = document.createElement('ul');
  storeSection.appendChild(storeInfo);

  let storeAddress = document.createElement('li')
  storeAddress.textContent = `Address: ${this.address}`;
  storeInfo.appendChild(storeAddress);

  let storeHours = document.createElement('li');
  storeHours.textContent = `Hours: ${this.hoursOpen}`;
  storeInfo.appendChild(storeHours);

  let storeContact = document.createElement('li');
  storeContact.textContent = `Contact: ${this.contactInfo}`;
  storeInfo.appendChild(storeContact);
};

for (let i = 0; i < stores.length; i++) {
  stores[i].renderStore();
}



// seattle.render();
// tokyo.render();
