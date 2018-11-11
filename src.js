//=========================================
// JS Assignment for Friday 16th November
//=========================================


// Data
//=========================================

var house = {
    areas: [{
        livingRoom: {
            items: ['tv','sofa']
        },
        bedroomOne: {
            items: ['bed','washing machine'],
            windows: 3
        },
        bedroomTwo:{
            items: ['bed','bed','desk'],
            windows: 4
        },
        kitchen:{
            items: ['fridge','broken chair']
        }
    }],
    garden: [true, 'Red Rose'],
    garage: {
        car: {
            color: 'red',
            wheels: 4,
            honk: ()=>{alert("Beep")}
        }
    }
}
 
// Questions
//=========================================

// 1) Find total number of areas in the house
    let houseAreas = Object.keys(house.areas[0]).length;
    //let houseAreas = Object.getOwnPropertyNames(house.areas[0]).length;
    console.log(houseAreas);


// 2) Add a dining table to the living room
    house.areas[0].livingRoom.items.push("dining table");
    console.log(house.areas[0].livingRoom.items);


// 3) Add a stove to the kitchen
    house.areas[0].kitchen.items.push("stove");
    console.log(house.areas[0].kitchen.items);


// 4) Remove the washing machine from bedroomOne
    house.areas[0].bedroomOne.items.pop();
    console.log(house.areas[0].bedroomOne.items);


// 5) Find the total number of beds in all rooms
    let rooms = Object.keys(house.areas[0]);
    let beds = 0;

    for (let i = 0; i < rooms.length; i++) {
        let roomItems = house.areas[0][rooms[i]]["items"];
        for (let j = 0; j < roomItems.length; j++) {
            if(roomItems[j] == "bed") {
                beds++
            }
        }     
    };

    console.log(beds);


// 6) Change the color of the car to blue
    //console.log(house.garage.car.color);
    house.garage.car.color = "blue";
    console.log(house.garage.car.color);

// 7) Add a another car to the garage with a honk function
    //console.log(house.garage);
    house.garage.car2 = {
        color: 'green',
        wheels: 4,
        honk: ()=>{alert("Beep")}
    }
    console.log(house.garage);


// 8) Make the new car honk
   house.garage.car2.honk();


// 9) Change the 'broken chair' in the kitchen to 'new chair'
    //console.log(house.areas[0].kitchen.items);
    house.areas[0].kitchen.items.splice(1,1,"new chair");
    console.log(house.areas[0].kitchen.items);


// 10) If the house has a garden, console.log the name of the flower
    if (house.garden[0]) {
        console.log(house.garden[1]);
    };
 