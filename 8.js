let houses = new Map();
houses.set("Home A", "Street 1");
houses.set("Home B", "Street 2");
houses.set("Home C", "Street 3");
houses.set("Home D", "Street 4");
houses.set("Home E", "Street 5");

for (let house of houses.keys()){
    console.log(house + " is located on " + houses.get(house));
}