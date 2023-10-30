let seattle = {
  Min : 23,
  Max : 65,
  Avg : 6.3
};

let tokyo = {
  Min : 3,
  Max : 24,
  Avg : 1.2
};

let dubai = {
  Min : 11,
  Max : 38,
  Avg : 3.7
};

let paris = {
  Min : 20,
  Max : 38,
  Avg : 2.3
};

let lima = {
  Min: 2,
  Max: 16,
  Avg : 4.6
};

let testCity = {
  Min: 1,
  Max: 10,
  Avg: 5
};

let hoursOpen = [
  '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'
];

function generateSalesData(city) {
  const randomData = {};

  for (let i = 0; i < hoursOpen.length; i++) {
    const minCustomers = city.Min;
    const maxCustomers = city.Max;
    const avgItems = city.Avg;

    // Calculate a random number for the current hour
    const randomCustomers = Math.floor(Math.random() * (maxCustomers - minCustomers + 1) + minCustomers);

    // Calculate the random items sold based on average
    const randomItems = Math.round(randomCustomers * avgItems);

    // Store the data for the current hour
    randomData[hoursOpen[i]] = randomItems;
  }

  return randomData;
}





// Seattle Content Generate//
// const seattleData = generateSalesData(seattle);
// console.log('Seattle:', seattleData);

// let seattleArea = document.getElementById('seattleCard');

// let seattleContent = document.createElement('ul');

// for (const hour in seattleData) {
//   let listItem = document.createElement('li');
//   listItem.textContent = `${hour}: ${seattleData[hour]} cookies`;
//   seattleContent.appendChild(listItem);
// }

// seattleArea.appendChild(seattleContent);


// // Tokyo Content//
// const tokyoData = generateSalesData(tokyo);
// console.log('Tokyo:', tokyoData);

// let tokyoArea = document.getElementById('tokyoCard');
// let tokyoContent = document.createElement('ul');

// for (const hour in tokyoData) {
//   let listItem = document.createElement('li');
//   listItem.textContent = `${hour}: ${tokyoData[hour]} cookies`;
//   tokyoContent.appendChild(listItem);
// }

// tokyoArea.appendChild(tokyoContent);


// //Dubai Content//
// const dubaiData = generateSalesData(dubai);
// console.log('Dubai:', dubaiData);

// let dubaiArea = document.getElementById('dubaiCard');
// let dubaiContent = document.createElement('ul');

// for (const hour in dubaiData) {
//   let listItem = document.createElement('li');
//   listItem.textContent = `${hour}: ${dubaiData[hour]} cookies`;
//   dubaiContent.appendChild(listItem);
// }

// dubaiArea.appendChild(dubaiContent);


// //Paris Content
// const parisData = generateSalesData(paris);
// console.log('Tokyo:', tokyoData);

// let parisArea = document.getElementById('parisCard');
// let parisContent = document.createElement('ul');

// for (const hour in parisData) {
//   let listItem = document.createElement('li');
//   listItem.textContent = `${hour}: ${parisData[hour]} cookies`;
//   parisContent.appendChild(listItem);
// }

// parisArea.appendChild(parisContent);


//Lima Content
// const limaData = generateSalesData(lima);
// console.log('Lima:', limaData);

// let limaArea = document.getElementById('limaCard');
// let limaContent = document.createElement('ul');

// for (const hour in limaData) {
//   let listItem = document.createElement('li');
//   listItem.textContent = `${hour}: ${limaData[hour]} cookies`;
//   limaContent.appendChild(listItem);
// }

// limaArea.appendChild(limaContent);


function populateCityStats(city, cityName){
  const cityStats = generateSalesData(city);
  let cityArea= document.getElementById(`${cityName}Card`);
  let cityContent = document.createElement('ul');
  for (const hour in cityStats){
    let listItem = document.createElement('li');
    listItem.textContent = `${hour}: ${cityStats[hour]} cookies`;
    cityContent.appendChild(listItem);
  }
  cityArea.appendChild(cityContent);
}

populateCityStats(testCity, 'testCity');

populateCityStats(lima, 'lima');

populateCityStats(paris, 'paris');

populateCityStats(tokyo, 'tokyo');

populateCityStats(dubai, 'dubai');

populateCityStats(seattle, 'seattle');
