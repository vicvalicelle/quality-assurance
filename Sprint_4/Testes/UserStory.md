# User Story

## US 001: [API] Users

Being a salesperson in a store

I would like to be able to register on the ServeRest Marketplace

To be able to sell my products

**Pain**

- Database and development infrastructure made available;
- Test environment made available.

**DoD**

- CRUD for seller (user) registration implemented (CREATE, UPDATE, LIST AND DELETE);
- Analysis of tests covering all verbs;
- Updated traceability matrix;
- Test automation based on the analysis performed;

**Acceptance Criteria**

- Sellers (users) must have the NAME, EMAIL, PASSWORD and ADMINISTRATOR fields;
- It should not be possible to perform actions and calls to non-existent users;
- It should not be possible to create a user with an email already in use;
- If no user is found with the ID provided in the PUT, a new user must be created;
- It should not be possible to register a user with an email already used using PUT;
- The tests performed must contain evidence;
- It should not be possible to register users with Gmail and Hotmail provider emails;
- Emails must follow a valid email pattern for registration;
- Passwords must have a minimum of 5 characters and a maximum of 10 characters;
- Test coverage should build on Swagger and go beyond it to cover alternative scenarios.

## US 002: [API] Login

Being a salesperson in a store with an existing registration

I would like to be able to authenticate myself on the ServeRest Marketplace

To be able to register, edit, update and delete my products

**Pain**

- Database and development infrastructure made available;
- User registration API implemented;
- Test environment made available.

**DoD**

- Authentication with Bearer token generation implemented;
- Test analysis covering the login route;
- Updated traceability matrix;
- Test automation based on the analysis performed;

**Acceptance Criteria**

- Unregistered users will not be able to authenticate;
- Users with an invalid password should not be able to authenticate;
- In case of non-authentication, a status code 401 (Unauthorized) should be returned;
- Existing users with the correct password must be authenticated;
- Authentication should generate a Bearer token;
- The token validity period must be 10 minutes;
- The tests performed must contain evidence;
- Test coverage should build on Swagger and go beyond it to cover alternative scenarios.

## US 003: [API] Products

Being a salesperson in a store with an existing registration

I would like to be able to authenticate myself and register products on the ServeRest Marketplace

To be able to register, edit, update and delete my products

**Pain**

- Database and development infrastructure made available;
- User registration API implemented;
- Implemented authentication API;
- Test environment made available.

**DoD**

- Product registration CRUD implemented (CREATE, UPDATE, LIST AND DELETE);
- Test analysis covering the product route;
- Updated traceability matrix;
- Test automation based on the analysis performed;

**Acceptance Criteria**

- Unauthenticated users should not be able to perform actions on the Products route;
- It should not be possible to register products with names already in use;
- It should not be possible to delete products that are inside carts (Carts API dependency);
- If there is no product with the ID informed at the time of the UPDATE, a new product must be created;
- Products created through PUT cannot have previously registered names;
- The tests performed must contain evidence;
- Test coverage should build on Swagger and go beyond it to cover alternative scenarios.

## US 004: [API] Cart

Being a ServeRest seller with registration already completed

I would like to be able to authenticate and register a shopping cart

To be able to add, remove and list products in the shopping cart

**DoR (Definition of Ready):**

- Database and development infrastructure made available.
- Authentication, user and product registration API implemented.
- Test environment made available.

**DoD (Definition of Done):**

- Be able to create, list and delete shopping carts.
- Test analysis covering the carts route.
- Updated traceability matrix.
- Test automation based on the analysis performed.

**Acceptance Criteria:**

- Unauthenticated users should not be able to perform actions on the cart route.
- Authenticated users should be able to add, remove, and list products to the cart.
- Returned carts are unique per user.
- Reduction in the quantity of products when registering each product inserted in the cart and replenishing product stock when the cart is canceled.
- It should not be possible to add a duplicate product.
- It should not be possible to add a non-existent product to the cart.
- It should not be possible to have more than one cart.
- It should not be possible to add a product to the cart if the quantity is insufficient.
- The tests performed must contain evidence.
- Test coverage should build on Swagger and go beyond it to cover alternative scenarios.