// Task 1:
//  Calculate the zakat value, first, create a variable named "zakatPercentage" and
//  store the value of 2.5% in it (hint: 2.5% means 0.025). Next, create another variable
//  named "userInput" and take the input from the user using the prompt. Make sure
//  the input value is of a type number by converting the input string to a number
//  using a suitable method. Then, create a variable named "result" and assign its value
//  to the multiplication of the zakat percentage and user input. Finally, use an alert
//  message to display the calculated zakat value. The message should look like this:
//  "Your zakat value is xxx".]

//  var zakatPercentage = 0.025;
//  var userInput = +prompt("Enter a Value");
// var result = userInput * zakatPercentage;
// alert("Your Zakat value is " + result);


// Task 2:
// calculate the fitrah amount, first, ask the user to enter the total number of family
// members using the prompt and store the value in a variable called
// "familyMembers". Next, ask the user to choose a fitrah method by providing them
// options using the prompt, and store the selected method and its price in variables.
// Then, use an if-else block to check the user's input and calculate the fitrah amount
// by multiplying the selected method's price with the number of family members.
// Finally, display the calculated fitrah amount using an alert message.

// var familyMembers =+prompt("Total Family Member")

// var item =prompt("Select the number " + "\n" + "1:Wheat Rs 250" +"\n"+ "2:Dates Rs 2100" +"\n"+ "3:Grain Rs 450" +"\n"+"4:Rice Rs 2000")


// if (item==1) 
// {
//    alert("Your fitra amount is" + familyMembers* 250) 
// } 
// else if(item==2)
// {
//    alert("Your fitra amount is" + familyMembers* 2100) 
 
// }
// else if(item==3)
// {  
//      alert("Your fitra amount is" + familyMembers* 450) 
// }
// else if(item==4){
//    alert("Your fitra amount is" + familyMembers* 2000) 

// }
// else {   alert("choose the right option")}


//  Task 4:
//  Create a program that asks the user to enter a name, and then prints out the name
//  with the first letter capitalized (Make your name in capitalized case).

// var studentName = prompt("Enter your name");
// var result =studentName.charAt(0).toUpperCase() + studentName.slice(1) ;
// alert(result);


// Task 5:
//  In this task, you will be creating two empty arrays called "contactNumbers" and
//  "contactNames". Using the prompt, you will ask the user to enter a contact number
//  and contact name. You will then push these values into their respective arrays
//  using the push method. After adding all the contacts, you will display the contact
//  numbers and names in the console. To do this, you will need to use a for loop to
//  iterate through both arrays and log each element to the console.
//  Make sure to use descriptive variable names and comment on your code for clarity


// var contactNumbers =[];
// var contactNames=[];
// for (let i = 0; i < 3; i++)
//  {
//     // const element = array[i];
//    contactNumbers.push(prompt("Enter Contact Number"))
//    contactNames.push(prompt("Enter Name"))
 
// }
// for (let i = 0; i < 3; i++) {

//   console.log(contactNames[i] + ":" + contactNumbers[i] )
   
// }


// Task 6:
// Create an Array that contains different products, and get input from the user in which you
// ask your user to give the position of that element he/she wants. Now remove that Item
// from your array and console the removed item, Also display the remaining items in the
// array and total number of items remaining.
     
// var products=["Mango","Banana","Apple","Grapes","Oranges","Strawberry","Cherry"]
// var userInput=+prompt("Select and enter position of item "+"   "+ products)
// var removedItem=products.splice(userInput-1,1)
// console.log(removedItem)
// console.log(products)
// console.log("Number of remainig items:" +" "+ products.length)


// Task 7:
//  Create a program that asks the user for their nationality, gender, and age using the prompt
//  function. The program should then use nested if-else statements to determine if the
//  person is eligible to vote.
//  First, the program should check if the person is Pakistani or Indian. If they are not, the
//  program should display a message saying they are not eligible to vote.
//  If they are Pakistani or Indian, the program should then check their gender. If the person is
//  male and over the age of 18, they are eligible to vote. If the person is female and over the
//  age of 18, the program should ask if they are married. If they are married, they are eligible
//  to vote. If they are not married, they are not eligible to vote.
//  If the person is under 18, the program should display a message saying they are not eligible
//  to vote.

var nationality=prompt("enter your nationality")

if(nationality.toLowerCase()=="pakistani" || nationality.toLowerCase()== "indian")
{
   var gender=prompt("enter your gender")
   
   if(gender.toLowerCase()=="male")
   {
      var age=+prompt("enter your age")
      if(age>18){
         alert("You are eligible to vote")
      }
      else{alert("You are not eligible to vote")}
   }
   else if(gender.toLowerCase=="female")
   {
      var age=+prompt("enter your age")
     if(age>18)
     {
      var maritalStatus = prompt("Enter marital status married or unmarried")
      if(maritalStatus.toLowerCase=="married")
      {alert("You are eligible to vote")}
      else{alert("You are not eligible to vote")}
     }
     else{alert("You are not eligible to vote")}
   
    
   }
   else{alert("You are not eligible to vote")}
} 
else{alert("You are not eligible to vote")}






// Task 8:
// You have an array of that contains the name of Pakistani Teams Player selected for
// WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
// India, So make an array of final team players (11 Players) that will be playing in tomorrows
// match from the WorldCupSquad array.
// (Hint : Make sure it should not disturb the array that contains 15 players instead you have
// to make acopy of this array)

// var WorldCupSquad = ["Babar", "Shadab", "Naseem", "Haris","Iftikhar", "Fakhar", "Shan", "Shaheen","Rizwan","Faheem","Imam","Nawaz","Imad","Hasnain","Khushdil"];
// var FinalPlayers = WorldCupSquad.slice(0,11)
// console.log(WorldCupSquad)
// console.log(FinalPlayers)
