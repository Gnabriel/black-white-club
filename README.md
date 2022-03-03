# Black White Club
_A project in the course DH2642 Interaction Programming and the Dynamic Web._

## Preview
See the deployed website here: https://elastic-jones-4500b0.netlify.app/

## About
This repository contains a web application for the Black White Club NFT. Black White Club is a collection of art pieces registered as NFTs on the Ethereum blockchain. On this website you can browse all art pieces and see more details about them.

You can also visit the marketing page and see what other users have posted in social media. If you become a member you are allowed to create your own posts on the marketing page. 

## Set-up

Black White Club requires [Node.js](https://nodejs.org/) v10+ to run.

1. Clone this repository.
2. Configure your Firebase project in _./src/firebase/firebaseConfig.js_.
3. a) For developer environments. Install the dependencies and devDependencies and start the server:

```sh
cd black-white-club
npm install
npm run dev
```

3. b) For production environments. Install the dependencies and build the project to _./build_:

```sh
cd black-white-club
npm install
npm run build
```
