const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// Basic for loop example
// for(let i = 0; i < companies.length; i++){
//    console.log(companies[i]); }


//* for Each
// companies.forEach(function(Company){
//     console.log(company.name); }); 

// Gets 21 and older result 
//filter using a for loop
// let canDrink = [] {
//  for(let i = 0; i < ages.length, i++) {
//     if( ages[i] >= 21) {
//       canDrink.push(ages[i]);}
//   }
//}

//using the filter method
//const canDrink = ages.filter (function(age) {   
 // if(age >= 21) {
 //   return true;}
//})
//console(canDrink);

// filter using arrow func - use this to show a line line crisp code, better programmer
//const canDrink = ages.filter(age => age >= 21);
//console.log(canDrink);

//filter Retail companies
//const retailCompanies = companies.filter (function(company) {
 // if (company.category === 'Retail'){
 //   return true;}});
 // console.log(retail);

 // filter companies that started in the eighties
 //const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
 //console.log(eightiesCompanies);

 //filter companies that lasted 10 years
 //const lastedTenYears = companies.filter (company =>(company.end - company.start <= 10));
 //console.log(lastedTenYears);

// now filter Retail using arrow func
//const retailCompanies = companies.filter (company => company.category === 'Retail');


//map
//const testMap = companies.map (function(company) {
 // return ` ${company.name} [${company.start} - ${company.end}]`;}) ;
// with arrow func
// const testMap = companies.map (company => ` ${company.name} [${company.start} - ${company.end}]`);
//console.log(testMap);

//const agesSquare = ages.map(age => Math.sqrt(age));
//console.log(agesSquare);

//const ageMap = ages
//.map(age => Math.sqrt(age))
//.map(age => age * 2);
//console.log(ageMap);

//sort
// sort companies by start year 
//const sortCo = companies.sort(function(c1,c2) { 
// if (c1.start > c2.start){
//    return 1;
//  } else {
//    return -1;
//  }});

//  const sortCo = companies.sort ((c1,c2) => (c1.start > c2.start) ? 1 : -1);
  //console.log(sortCo);

// sort Ages
//const sortAges= ages.sort((a,b) => a-b);
//console.log(sortAges);


//reduce
//  For loop for reduce
//let ageSum = 0 
//  for(let i=0; i < ages.length; i++) {
//    ageSum += ages[i];}

//const ageSum = ages.reduce(function(total,age){
//  return total + age; 
//}, 0);

// as an arrow func
//const ageSum = ages.reduce((total,age) => total + age, 0);
//console.log(ageSum);

//Get total years for all companies
 //const totalYears = companies.reduce (function (total , company) {
 //  return total + (company.end - company.start); }, 0);

 //const totalYears = companies.reduce ((total , company) => total + (company.end - company.start), 0);
 //console.log(totalYears);

  //combine methods example
  const combined = ages
  .map( ages => (ages * 2))
  .filter(ages => ages >= 40)
  .sort((a,b) => a-b)
  .reduce((a,b) => a +b, 0);

  console.log(combined);
