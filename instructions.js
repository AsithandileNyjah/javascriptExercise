 //Answer make sure to answer all of the questions between the questions that follow

// The following exercise consists of DOM manipulation, variables, conditional statements, loops, arrays and objects Everything you have covered so far.
// The questions will vary with difficulty and you may be required to combine more than one topic to complete a certain exercise. 
// ***You will not be allowed to use Youtube solutions if you are unable to explain your solutions that follow. After I check your answer and you cannot explain your code, I will mark it as a strike against your name.
// AIM: To complete the exercise fully without any assistance as much as possible.
// REMEMBER:   The feeling for anxiousness and excitement is that of a fine line...Physiologically they are almost identical. 
//             The feeling you're feeling is excitement not nervousness. I know you got this! I believe in you even if you don't believe in yourself!:)


// 1. Use the following id="heading" to change the heading(This is the main heading) of the html to 'Javascript', DO NOT USE QUERY SELECTOR
document.getElementById('heading').innerText='JavaScript'


// 2. Use the class='paragraph' and change the information to 'This is a language I have mastered and I am proud of myself. I complished this because I believed in myself'
document.getElementsByClassName('paragraph')[0].innerText='This is a language I have mastered and I am proud of myself. I complished this because I believed in myself'

// 3. Use the h3 element and change the heading(Subheading) to 'Things I've accomplished so far'. Hint: use querySelector
document.querySelector('h3').innerText='This I\'ve accomplished'

// 4. Change the paragraph below Question3(above) to 'I have discovered that I can accomplish anything I put my mind to'Hint: Use querySelectorAll and index or use getElementByTagName and index
document.getElementsByTagName('p')[1].innerText='I have discovered that I can accomplish anything I put my mind to'

// So far you have hints, however the hints have lessened.
// 5.1. Attach the first input to a variable
// let multiply = document.querySelector('[data-firstMultiply]').value
// 5.2. Attach the second input to a variable
// let x = document.querySelector('[data-secondMultiply]').value
// 5.3. Attach the FIRST button to a variable(going to add an eventListener to button)
let btn = document.querySelector('[data-calculate1]')
// 5.4. Attach the FIRST span element to a variable(To display the information to)
let display = document.querySelector('[data-first]')
//         P.S. for the next step make use of console.log() to keep track of where data is going  
// 5.5. Create a normal function that allows us to multiply the 2 inputs together and writes the information to the FIRST span element.
function multiply(){
    let multiply = document.querySelector('[data-firstMultiply]').value  
    let x = document.querySelector('[data-secondMultiply]').value
    let answer = eval(`${multiply}*${x}`)
    console.log(answer);
    display.innerText = answer
}
// 5.6. Add an event listener to the button that runs the function that tyou created
btn.addEventListener('click', multiply)
// 5.7 Hmm......Did you forget to make your input tags return a value instead of the element? (0.0)
//     Or did you forget we are writing to an element not an input?....which means your answer will be displayed with innerText

// Okay, that was pretty awesome...not too bad when you have the steps?

// 6. Now you will have to return the calculation of the 2 numbers from the modulus input for eg.......4....%....2....= 0
// 6.1 Set the first modulus input to a variable 
let firstDivide = document.querySelector('[data-firstModulus]').value
// 6.2 Set the send modulud input to a variable
let secondDivide = document.querySelector('[data-secondModulus]').value
// 6.3 Set the SECOND span to a varable(will display answer)
let display2 = document.querySelector('[data-second]')
// 6.4 Set the SECOND button to a variable(to run event listener)
let btn2 = document.getElementById('calculate2')
// 6.5 Create a normal function to calculate the modulus of the inputs
function modulus(){
    let firstDivide = document.querySelector('[data-firstModulus]').value
    let secondDivide = document.querySelector('[data-secondModulus]').value
    let answer = eval(`${firstDivide}% ${secondDivide}`)
    console.log(answer)
    display2.innerText = answer
}
// 6.6 Add an event listener to the button which will run the function you created
btn2.addEventListener('click', modulus)

// Hmmm......That wasn't too bad....I knew you could do it! I believe in you.
// You should now have an idea of the steps neccesary to complete actions using DOM manipulation.

// Okay now that you are aware of the steps needed, try no 7
// 7.1 Change the text of 'Bubble Tea' to 'White Tea'
document.getElementById('bubbleTea').innerText='White Tea'
// 7.2 Change the text of 'Green Tea' to 'Black tea'
document.getElementsByClassName('greenTea')[0].innerText='Black Tea'
// 7.3 Change the text of 'Iced Tea' to 'Herbal Tea'
document.querySelector('[data-icedTea]').innerText='Herbal Tea'

// You're eating Javascript, and again....I'm proud of you!

// 8. Declare a variable called lastName and add a value to it(value must be a string)
let lastName = 'Putin'
// 9. Declare a variable called parentsAge and give it a value of 20(value must be a number)
let parentsAge = 20;
// 10. Create an array with called coolCars and give it the following value: ['BMW','Bugati','Ferrari','McLaren', 'Mercedes']

let coolCars = ['BMW', 'Bugati', 'Ferrari', 'McLaren', 'Mercedes']

//             Now to manipulate the arrays. ;)
// 11. Write the code to change the 'McLaren' value to 'Lamborghini' in the array Hint: use indexing to access different values in arrays
coolCars[3]='Lamborghini'
// 12. Use a for loop to loop through the array, and console.log every value inside of the array.

for(let car=0;car<coolCars.length;car++){
    console.log(coolCars[car]);
}

// 13. Reverse the array and console.log the reversed array.

let newCoolCars = coolCars.reverse()

console.log(newCoolCars);

// 14. Write the code to remove the last item in the array(coolCars not the reversed array) and store it in a variable....which means your array of coolCars must look like : ['BMW','Bugati','Ferrari','Lamborghini]

let coolCarsLastItemRemove = coolCars.slice(0, -1)

// 15. Now write the code to use the variable you made in no.14 and add it to the FRONT of the array. Your coolCars array should now look like:
// [ 'Mercedes', 'BMW', 'Bugati', 'Ferrari', 'Lamborghini']



//             Time to SWITCH it up a bit
// 16. Write a simple conditional statement that will check if someone is younger than 18 or older than 18. The variable will be called age = 18 then a=17 to check
let age = 18
let a = 17
if(a>=age){
    console.log(`Is 18 or older`);
} else {
    console.log(`Younger than 18`);
}


// 17. Make use of a switch statement and create a possible soultion for no.16

switch(true){
    case a>=18:
        console.log(`Is 18 or older`);
        break
    case a<18:
        console.log(`Younger than 18`);
        break
}

// 18.     USE A SWITCH statement!!!!!
// A students Maths mark was 77%,their Physics marks was 70% and their English was 50%. You are required to calculate their average mark. Then we can check the average mark and return a messageto the console, if averageMark is :
//         100%-80%(message = "You did well your average was ..."), 
//         79%-70%(message="You average was good, it was ..."),
//         69%-50%(message='Your average was okay, it was ..'), 
//         49%-0% (message ='You must work harder next time')
let markPhysics = 70
let markMaths = 77
let markEnglish = 50
let sumOfMarks = markMaths + markPhysics + markEnglish
let noOfMarks = 3

let averageMark = sumOfMarks/noOfMarks

switch (true){
    case averageMark>=80:
        console.log(`You did well your average was ${averageMark}`);
        break
    case averageMark<80>70:
        break
    case averageMark>70<69:
        console.log(`You average was good, it was ${averageMark}`);
        break
    case averageMark>50<69:
        console.log(`Your average was okay, it was ${averageMark}`);
        break
    case averageMark>0<50:
        console.log(`You must work harder next time`);
}

// 19. USE the variable that you created in question 9 and use a while loop to print each iteration to the console and at that same instance, increase the variable used by 1

let U = 0;

do {
    console.log(U);
    U += 1;
} while (U <= 20);

// 20. USE while or a do while loop to print out the array of Question15(coolCars).

do {
    console.log(coolCars);
    U++;
} while (U<coolCars.length)

// 21. Create an object called chair and give it a 
//         property of legs and a value of 4,

let chair = {
    legs: 4,
    material: 'plastic'
}

//         a secondProperty of material with a value of plastic
// 22. Write the code that adds a property of 
//         'armRestBars' with a value of 'none' 
//         to the chair object.
chair.armRestBars='none'
// 23.1.   What code will I write to view the value of the armRestBars.

chair.armRestBars

// 23.2    What code can I use to delete the property of legs with the value of 4.

delete chair.legs


// 24. Create an factory function that can be used to return objects of electrical devices.
//         the factory function should include the properties of 
//         name,
//         type,
//         year,
//         description
function createElectricalDevice(name, type, year, description){
    return {
        name: name,
        type: type,
        year: year,
        description: description
    }
}
// 24. Create 4 objects of your choice using a factory function and console.log() each of them

let device1 = createElectricalDevice("Smartphone", "Mobile", 2022, "Great camera");
let device2 = createElectricalDevice("Laptop", "Computer", 2021, "Gaming Laptop");
let device3 = createElectricalDevice("LED TV", "Television", 2020, "HD SmartTV");
let device4 = createElectricalDevice("Microwave", "Smart Home", 2019, "Microwave you can operate from your phone.");

console.log(device1);
console.log(device2);
console.log(device3);
console.log(device4);

// 25. Create a constructor function to make an object of different car, types the properties should include,
//         this.brand,
//         this.model,
//         this.year,
//         this.transmission,
//         this.drivetrains

function Car(brand, model, year, transmission, drivetrain) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.transmission = transmission;
    this.drivetrain = drivetrain;
}

// 26. Create 4 objects of your own and print to the console all of the created objects.

let Toyota = new Car("Toyota", "Camry", 2022, "Automatic", "Front-wheel drive");
let Mazda = new Car("Mazda", "CX-5", 2021, "Automatic", "All-wheel drive");
let Hyundai = new Car("Hyundai", "Elantra", 2020, "Manual", "Front-wheel drive");
let Ford = new Car("Ford", "Mustang", 2019, "Automatic", "Rear-wheel drive");

console.log(Toyota);
console.log(Mazda);
console.log(Hyundai);
console.log(Ford);


// 27. After, push the 4 objects to an array called 'informationAboutCars'.

let informationAboutCars = []

informationAboutCars.push(Toyota, Mazda, Hyundai, Ford)


// 28. Create a function that can be used 'globally', the function should return a sentence containing all the properties used inside the object, eg 'The car brand Ford has a model of a Figo that was produced in 2019. It is a manual and is a front wheel drive'

function createCars(brand, model, year, drive){
    return {
    brand: brand,
    model: model,
    year: year,
    drive: drive
    }
}
let car1 = createCars ('Ford', 'Figo', 2012, 'Rear wheel drive')
let car2 = createCars ('Nissan', 'Almera', 2014, 'All wheel drive')
let car3 = createCars ('Mitsubishu', 'Hardbody', 2011, "Front wheel drive")
let car4 = createCars ('Porche', 'Cayenne', 2020, "All wheel drive")
// 29. Make sure to write the above sentences for each car inside the corresponding h4 elements
// 30. Use the array in question10 that you created and create a conditional statement that check if 'BMW' appears in the array. The console should return 'This item does appear in the array' or 'The item does not appear in the array'
// 31. Declare an array and give it a value of [5, 18, 14, 16, 2, 1].
//     Create a program that returns the middle value of the current array, if array length is even return 2 numbers, if the array lengthis odd return 1 number
// 32. Go back to Question 16 and use the conditional statement you created. The age has to be requested from the user and the message ust be written to the html page in the corresponding element
