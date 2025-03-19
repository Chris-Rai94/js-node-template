# Reflection

## Most Challenging Part of Loops

There was a small difference in loops with JavaScript and my other languages.  
The difference being using a semi-colon ; rather than a comma ,.  
This difference was messing with me a lot when I was writing the loops and then would go to  
test it. I would be sitting there wondering what was wrong.  
It would tell me that a semi-colon was needed. I just didn't know where until I asked copilot.

## Not Immediately Apparent

I would say the `.toFixed` I figured there was something to limit decimal places.  
I did not know that it was doing that until the video.  
The `Math` function and it's methods was self explanatory as I had to use  
similar in all the programming languages I know.  
In the other languages it might look different but they all used methods from Math.

## Loops in Websites

In some browser games I played the character would collect a material until I inputted  
a button to stop the collection. I say that would be a while loop as it continued to repeat  
until I gave it the condition to end the loop.  
Another way a website might use loops if with a quick search function.  
As you type in the search bar it gives options on what it could be using criteria from the search bar  
and looping the text while displaying options that match that text in a dropdown menu.
This allows the website to be more user-friendly since they may not know the full text of an option.

## Explain `for` and `while` Loops

Both for and while loops allow us to reiterate some code to be used multiple times.  
This makes our code shorter and more readable.  
A `for` loop declares a variable, typically i, within the for loop structure and uses that to loop back  
a set number of times.

```JavaScript
for(let i = 1; i < 11 ; i++){
    console.log(i);// 1,2,3...
}
```

A `while` loop takes an outside variable or condition and loops until that condition is no longer met.
This allows loops when you do not know how many loops you will need.

```JavaScript
let i = 0;
let health = 100;
const damage = 25
while(health > 0){
    health -= damage
    i++
}
console.log(`It took ${i}rounds to kill the player`)//4 rounds
```

Above we see that if damage was different it would take a different amount of time to get health to zero.  
So here a while loop is better than a for loop.
If there was only 4 rounds then a for loop may be better.
