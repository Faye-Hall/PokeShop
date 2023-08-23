# PokéShop


https://github.com/Faye-Hall/PetMatch/assets/82423399/cfe35c2e-0874-4405-a874-f07e151b154b


#### 1. What goal will your website be designed to achieve? What kind of users will visit your site?

The goal of this website is to present the user with easy to use ecommerence shop for all of the Pokemon. The type of user who will be visting my site will be ones who enjoy Pokemon and want to have an enjoyable experience searching for and collecting them.

#### 2. What data do you plan on using? You may have not picked your actual API yet, which is fine, just outline what kind of data you would like it to contain.

The API I am using is the [PokeAPI](https://pokeapi.co/). The data includes details on Pokemon that have been created. I use the Pokemon's
name, type base experience,height, and weight descriptions to display what is on each PokeCard. When the page loads the API retrieves the data, and each card is filled out and displayed to the user.

#### 3. In brief, outline your approach to creating your project (knowing that you may not know everything in advance and that these details might change later). Answer questions like the ones below, but feel free to add more information:

**a. What does your database schema look like?**

My schema has one table to hold the user's username and password so that they are able be authenticated and authorized to shop on the site.

**b. What kinds of issues might you run into with your API?**

The PokeApi may not have a certain Pokemon if it is not up-to-date at the time of use.

**c. Is there any sensitive information you need to secure?**

Usernames and passwords will need to be secure.

**d. What functionality will your app include? What will the user flow look like?**

When the user access the website they will be presented with the home page where they can login or signup, but won't be able to shop yet. If they do not before a few seconds, they will be prompted to do so with popup. Once they are authenticated and authorized then they are able to browse, shop, and view their cart and account details. They can also delete their account as well.
