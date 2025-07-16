// 1. Miles to Km
function toKM(distance) {
    console.log(distance * 1.6);
}
toKM(50);

// 2. KM to Miles
function toMiles(distance) {
    console.log(distance / 1.6);
}
toMiles(32);

console.log('\n');

// 3. Miles and KM to Feet
function toFeet(distance, unit) {
    if (unit === 'miles') {
        console.log(`Miles in Feet : ${distance * 5280}`);
    }
    else if (unit === 'km') {
        console.log(`KM in Feet : ${distance * 3281}`);
    }
}
toFeet(5, 'miles');
toFeet(5, 'km');

console.log('\n');

// 4. print invalid units
function toFeet1(distance, unit) {
    if (unit === 'miles') {
        console.log(`Miles in Feet : ${distance * 5280}`);
    }
    else if (unit === 'km') {
        console.log(`KM in Feet : ${distance * 3281}`);
    }
    else {
        console.log(`Invalid unit : ${unit}`);
    }
}
toFeet1(5, 'miles');
toFeet1(5, 'km');
toFeet1(5, 'lbs');