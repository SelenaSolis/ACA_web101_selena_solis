
# Intro
We have coded our ACA Store such that it works within the confines of the current browser window and computer.

http://plnkr.co/edit/uKvC1xPw4ubkF6Nc2nbl?p=preview

Let's use a real backend server to maintain the important information of our store. We need to store the products and the cart on the server instead of on the client. We cannot use sessionStorage to store the cart because it won't allow the user to access their cart from another computer or browser. Our server is capable of handling all our basic http methods: GET, POST, PUT, DELETE. Use the built in javascript tool fetch to create the http messages we need.

https://acastore.herokuapp.com


## User
Now that we are saving the shopping cart on the server, we need to be able to identify who a cart belongs to. Let's have a user sign up with email and password before they can use the store.

## Sign Up
* When the web page is first opened, show a sign up screen.
* Create a text input for email and password
* Create a button for sign up
* When the sign up button is clicked, do a POST to /users. Save the returned object in localStorage
* Do not show the sign up again as long as the user object is in localStorage

## Show Products
* Use the the same code for listing out the array of products
* Intead of using the hard coded array, do a GET to /products

## Create Product
* Create a screen that is intended to be used by the employees of the company
* Create text input for name,description, price
* Create a save button, when clicked will do a post to /products. Refresh the list of products

## Cart
* Do not use sessionStorage anymore
* Initialize the cart variable with data from the server
* If this is the first time a user has shopped, do a POST to /carts {userId:{theuserid},products:[]}
  * Save the cartId into the user object
  * Do a PUT to /users/{userId} to save the cartId to the server
* If the user already has a cart (how do you know this?)
  * Do a GET to /cart/{cartId}. 
* When an item is added to cart do a /PUT to /carts/{cartId}


## Place order
* Translate the products in the cart into an order object
* Do a POST to /orders
* Use an email api to email the person that their order has been placed
