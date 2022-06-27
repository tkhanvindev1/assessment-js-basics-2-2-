///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
//1.pull a price into new array

const priceArray = cart.map(obj => obj.price) 
console.log(priceArray)

const summedPrice = priceArray.reduce(function(acc,curr){

 return acc + curr

})

console.log(summedPrice)
   




//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return cartTotal + (cartTotal * tax) - couponValue
}
// cartTotal(26.97)
// couponValue(1.05)
// tax(6)
console.log(calcFinalPrice(26.97,5,.06))



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Property:
1. Name - to assign an order to a customer
2. Lastname - identify right Name, name easy can be match with another
3. Phone number - to able to reach to a specific customer with some info about assigned order
4. Email - if phone process goes False/ reach through email
5. Ready time - let customer know timing on his order,important communication between restaurant and customer
7. Pay choice - make it convinient for both sides, save time and help operate business easier. 

name - str - easy understand and readability
lastname - str - easy understand and readability
phoneNumber - num - only numbers can be accept
email - str - includes multiple symbols can't be a number or something else
time(min) - num - readabilty and clear understanding, able to do math functions if needed
payOnline - bool understand if its True open credit card form section if False skip and pay a restaurant




*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    name: 'Jonh',
    lastname: 'Gepard',
    phoneNumber: 3522179745,
    email: 'josephG87@alo.com',
    readyTime: 30,
    payOnline: true 

}

console.log(customer)
