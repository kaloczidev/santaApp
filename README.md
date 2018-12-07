# Introduction
Well, Santa needs help and we are living in 2018 with tons of apps available. Why wouldn't we create another one?

## Set up the tools

We are using react-native for our application. React native makes mobile development way more easier than it is, but there are some cases when you cannot use. Expo comes to help us to bridge the gap between platforms.

#### Step 0: Install node and yarn and stuff

Seriously, we need javascript outside the of browsers, the runtime! And further, we want JS to be our main language of the mobile app. Grab node from it's site, or use `brew|apt|etc...`.

#### Step 1: Install expo

Expo have a great cli tool to generate and deploy our project. It's available on npm, so simply: `yarn global add expo-cli`.

#### Step 2: generate a project

Using expo cli we can create an app with an ease: `expo init <app-name>`. 

Choose blank `app template` when its prompted. We'll get our stuff when we need them.

#### Step 3: Get the app

Expo uses a "shell app" to work. It loads the .jsbundle from a remote that needs to be syned during the development. 
Download it from your app store to your phone.

 #### Step 4: check it works
 
 The cli grabs its packages and creates an example app for us, make sure it does the right thing: run `yarn start` in the generated project directory. 
 It will start a bundle task, and opens up your browser with its debugger port.
 
 You will see a QR code on the bottom left corner of the page. Scan it with your phone, and it will open the expo app. 
 
 #### Step 5: explore!
 
 Do what the app says: Open App.js and start hacking!
 
 ##### slides 
  Grab them from [here](docs/slides.pdf).
