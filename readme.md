//GIT Basic Commands
git status
git add <filename> // git add .
git commit -m "Commit Message"
git push
git push origin main

//Assignment - 13th Aug
1. Get the sum of first 100 Numbers 
2. Reverse the number - 3982 - output should be 2893
3. Reverse the String - Javascript - output should be tpircsavaJ

//Assignment - 19th Aug - https://opensource-demo.orangehrmlive.com/

1. Login into OrangeHRMS - 
Assert the following elements is visible or not -
- Time at Work
- My Actions
- Quick Launch
- Buzz Latest Posts
- Employees on Leave Today
- Employee Distribution by Sub Unit


2. Login into OrangeHRMS - 
Validate all the menu item is visible or not
- Admin
- PIM
- Leave
- Time
- Recruitment
- My Info
- Peformance 
- Dashboard
- Directory
- Maintence
- Claim
- Buzz

3.Login into OrangeHRMS -
- Get the name of the user 
- Print in the console area
- Perform Logout




Assignment - 20th Aug

https://selectorshub.com/ - Plugin URL - You need to try diff Plugin
https://demoqa.com/automation-practice-form - Form - You need to try Below Xpath

//Differents Ways to Write XPATHs


1. Absolute XPath

Starts from the root of the HTML document.

/html/body/div[1]/div[2]/input
Very specific
Usually not recommended because small UI changes can break it.
2. Relative XPath

Starts from anywhere in the document using //.

//input

Better than absolute XPath because it doesn't depend on the entire DOM hierarchy.

3. XPath using an ID
//input[@id='username']

Or:

//*[@id='username']

Usually one of the most reliable approaches when the ID is stable.

4. XPath using a class
//input[@class='form-control']

If the element has multiple classes, exact matching can be problematic. You can use:

//input[contains(@class,'form-control')]
5. XPath using text
//button[text()='Login']

Useful for buttons, links, labels, etc.

You can also use:

//button[contains(text(),'Login')]
6. Using multiple attributes
//input[@type='text' and @name='username']

Or:

//input[@id='username' and @placeholder='Username']

This is useful when a single attribute isn't unique.

7. Using contains()
//input[contains(@id,'user')]

For text:

//button[contains(text(),'Login')]
8. Using starts-with()
//input[starts-with(@id,'user_')]

Useful when part of an attribute is dynamic.

9. Using normalize-space()

Handles extra spaces in text:

//button[normalize-space()='Login']

This is often better than:

//button[text()='Login']

10. XPath using parent-child relationship
//div[@id='login']//input

Or:

//form[@id='loginForm']/input
11. Using parent
//input[@id='username']/parent::div

Finds the parent <div> of the input.

12. Using ancestor
//input[@id='username']/ancestor::form

Finds an ancestor <form>.

13. Using following-sibling
//label[text()='Username']/following-sibling::input

Useful when two elements are siblings.

14. Using preceding-sibling
//input[@id='username']/preceding-sibling::label
15. Using following
//label[text()='Username']/following::input[1]

Finds the first input appearing after the label in the document.

16. Using XPath indexes
//input[1]

or:

(//input)[2]

Be careful with indexes because they can become invalid when the page structure changes.

17. Using or
//input[@id='username' or @name='username']
18. Using not()
//input[not(@disabled)]

Finds inputs that aren't disabled.

19. Using variables/partial dynamic attributes

For example, if the HTML is:

<input id="user_12345">

You can use:

//input[starts-with(@id,'user_')]

or:

//input[contains(@id,'user_')]
20. Combining relationships and conditions

For example:

//div[@class='login']//button[contains(normalize-space(),'Login')]

This is often a good practical XPath because it narrows the search to a meaningful section of the page.

In Selenium automation, a good preference order is generally:

Stable ID
   ↓
Unique name / data-* attribute
   ↓
Unique combination of attributes
   ↓
Relative XPath with parent/child relationships
   ↓
Text-based XPath
   ↓
contains()/starts-with()
   ↓
Indexes
   ↓
Absolute XPath

If you're preparing for Selenium interviews, the most important XPath concepts to know are //, @attribute, text(), contains(), starts-with(), and/or, parent, ancestor, following-sibling, preceding-sibling, and XPath indexes.


//Assignment - 31st Aug

https://parabank.parasoft.com/parabank/register.htm

1. Do not fill anything and click Register
2. Password and Confirm Password Mismatch
3. Password Lenght - 1
4. Do not fill confirm password and Click Register 


//Assignment - 1st Sep
1. All the method for Array.
2. All the method for String Class
3. 10 Programs on JAVASCRIPs

Beginner Level
1. Reverse a String
Write a JavaScript program to reverse a given string.

Example:

Input:  "JavaScript"
Output: "tpircSavaJ"

2. Check Even or Odd
Write a program that accepts a number and checks whether it is even or odd.

Example:

Input:  25
Output: Odd

3. Find the Largest Number
Write a program to find the largest number among three numbers.

Example:

Input: 10, 25, 15
Output: 25

4. Count Vowels
Write a program to count the number of vowels (a, e, i, o, u) in a string.

Example:

Input:  "Automation"
Output: 6

5. Check Palindrome
Write a program to check whether a string is a palindrome.

Example:

Input:  "madam"
Output: Palindrome

Input:  "hello"
Output: Not a Palindrome

Advanced Level
6. Find Duplicate Elements in an Array
Write a program to find all duplicate values in an array.

Example:

Input:
[10, 20, 30, 20, 40, 10, 50]

Output:
[10, 20]

7. Find the Second Largest Number
Write a program to find the second-largest unique number in an array without using a built-in sorting method.

Example:

Input:
[10, 50, 30, 80, 60]

Output:
60

8. Count Frequency of Each Character
Write a program that counts how many times each character occurs in a string.

Example:

Input:
"javascript"

Output:
j: 1
a: 2
v: 1
s: 1
c: 1
r: 1
i: 1
p: 1
t: 1

9. Find Missing Number
You are given an array containing numbers from 1 to N, but one number is missing.

Write a program to find the missing number.

Example:

Input:
[1, 2, 3, 5, 6]

Output:
4

Challenge: Try solving it without using nested loops.

10. Group Objects by Property
Given an array of employee objects, group the employees based on their department.

Input:

[
  { name: "John", department: "IT" },
  { name: "Alice", department: "HR" },
  { name: "Bob", department: "IT" },
  { name: "David", department: "Finance" },
  { name: "Sarah", department: "HR" }
]

Expected Output:

IT:
  John
  Bob

HR:
  Alice
  Sarah

Finance:
  David