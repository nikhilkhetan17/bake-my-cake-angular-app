## Project - Bake My Cake

#### Context

Cakes, cookies and brownies are all time favorites of young and old. No celebration is complete without these delicacies. The cake shops have started offering options to the customers to bake cakes as per their needs.

In addition, taking the advantage of widely used digital platform, the cake outlets offer options to customers to place their orders online. 

This is a win-win situation for both the outlet as well as its customers. The outlets are able to reach to larger audience and the customers are able to enjoy the delicacies prepared by the popular outlet, served at their doorstep.

#### Problem Statement

Develop a single page application using Angular – Bake My Cake, that allows customers to make an online request for cakes, cookies, or brownies of their choice. 

The delicacies are displayed with attractive images and crisp details, allowing the users to select the item of their choice and provide the order details. The app should seek confirmation from the users before allowing them to navigate away from the order view without submitting the details.​

The app can search and filter the items by the user’s preference for a quick selection. 

The site administrator can view the incoming order requests.​ The app should redirect user to first validate his identity as site administrator before providing access to the order request view.​

#### Tasks

##### Task 1 – Design Landing View

- The landing view of the app must display the images of cakes, cookies and brownies.
    - The data must be fetched using json-server.
    - This view must be the default view.
- These items should be selectable by the user.
    - Upon selection, the user should be navigated to the order view.
- The landing view must also allow users to search / filter these items by their preference.
    - Search allows user to search by item name.
    - Filtering allows user to filter items by category.

##### Task 2 – Design Order View

- The user will be navigated to the order view once he selects the item on the landing view.
- The view should display the details of the item selected
- This view should also allow user to provide the details required for placing order for the selected item.
    - The details should include the item details as well as the customer details.
- The app will request confirmation from the user to leave the view, if the user attempts to navigate away from this view without submitting the request.

##### Task 3 – Design Login View

- The user should be navigated to the login view if he attempts navigation to the cart-requests view.
- The view should request the user to enter the security code to login as Administrator.
- Upon successful validation, the user should be navigated to the cake-requests view.

##### Task 4 – Design Cake-Requests View

- This view will display all the cake order requests received in tabular format.
- This view has restricted access and is accessible only to the site administrator.

#### Instructions for the Project

- Fork the boilerplate into your own workspace.​​​​​​
- Clone the forked boilerplate into your local system.
- The boilerplate contains images of cakes, cookies and brownies.
- Copy the images in the solution code and use them in the project.
- Create Angular application and develop the solution for the requirements specified.
- ​Test the outcome and ensure it fulfills the stated requirements.​​
