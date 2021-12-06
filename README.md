Short description of your project:

An application for the Black White Club NFT where you can find information about the NFT.
Black White Club is a collection of XXXX art pieces registered as NFTs on a blockchain. If
you own one of the NFTs you can create an account and become a member of the club.
Users may register with Google in order to become a member. Members get access to
contribute to the marketing page

Theese are the pages of the application:
● Home
● Browse
● Details
● Login
● Signup
● Marketing

The Home page will consist of information about the NFTs. The Browse page will display all
the NFT art pieces, which will be fetched from an API by OpenSea. Users may filter and sort
the NFTs shown by parameters provided by the API. If you click on an NFT you get to its
Detail page where more information is shown about that asset. The Login and Signup page
lets users login/register with their Google account. The Marketing page is open for all visitors
to view. Here, logged in users can embed their social media posts (e.g twitter, reddit,
medium) about Black White Club.

What you have done:

We have set up the page, with an homepage that still misses information about the NFT. You can enter the browse page where some NFTs that are read from openseaAPI are shown(and some filter options that do not work and will be changed). Clicking one of the NFTs will lead you to a detailed page about the specific NFT. We have started implement the model with redux but are not done. 

What you still plan to do:

We still need to finish the start page with information about the Black White Club.
Overall the design still aren't done.
The login function are still to be done.
Finish the redux model.
Database with firebase.
Marketing page.

Your project file structure (short description/purpose of each file):

In the src map we have the following files:

index.jsx: initial render of the application
app.jsx: Render components and set up routes

api: folder for all js files regarding api calls

components: folder for all presenters and views

    common: folder for all views that are used on more than one presenter.

    pages: folder for all presenters and views for the different pages of the application

        Browse: folder for all presenters and views for the browse page
        Home: folder for all presenters and views for the home page
