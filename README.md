# Minor Web Code Challenge & Intake Tool

<p float="left">
  <img width="49%" src="https://user-images.githubusercontent.com/43671292/95306737-11ac2180-0888-11eb-8401-33a079590ad1.png" /> 
  <img width="49%" src="https://user-images.githubusercontent.com/43671292/95306823-2ab4d280-0888-11eb-8157-1848907abdba.png" />
</p>

## Installation 🤓
Use the following instructions to install and run the project

- 1: Open your terminal

- 2: Clone the repo
```
git clone https://github.com/cmda-minor-web/intake-tool.git
```

- 3: Go into the right folder
```
cd intake-tool
```

- 4: Install all packages
```
npm install
```

- 5: Create a .env file containing the following credentials:
```
PORT= The port you want to use when running this project
EMAIL_PASSWORD= Your email password
EMAIL_USERNAME= Your email username
MONGO_URI= Your MongoDB URI
```

- 6: Run the project
```
npm start
```

You should now be able to browse to localhost:{Your port} and use the app

## Features

### Coding challenge
A big part of this app is the coding challenge. The coding challenge features a couple of nifty things to make it more fun for the easier.

#### Codeflask
The coding challenge has three different panels each featuring their own respective language; HTML, CSS and JavaScript. The panels have code hightlighting, line numbers and indenting support.

#### Saving so you can finish it later
The code you write can be saved for future use, just press the save button and when you return to the app you can type the same url and your code will be there!

### Email 
Once a user has filled in the form, an email will be sent to the email filled in the .env file. The email features an email-template found in the src map.

### Intake form
Previous the minor web dev did everything by paper, asking questions if you've done previous tech projects or not. Now it will be done online. This way the user fills in the enhanced form and sends the data to the teacher, who will then decide if the student is fit for the minor. 

### MongoDB 
Everything is saved in MongoDB, the data from the form, the HTML / CSS / JS from the coding challenge is also saved in MongoDB. The data structure is built with a single email that the user has first filled in.

#### Code injection
To provide some security to the database we have introduced mongo-sanitize. Which will check for possible injections or commands known to MongoDB and remove them or change their characters to something harmless.

## Desired app flow
<img width="100%" src="https://github.com/cmda-minor-web/intake-tool/blob/master/flow.png" /> 


## Best practices

- [ ] CSS methodology (SMACSS)[http://smacss.com/book/prototyping]

## Icons
The icons used in this tools are made by [Tabler](https://tablericons.com/)

## TO DO ✅ 
- [ ] Redo the flow in the app itself
- [ ] Fix the arrow functions not being saved properly in the database (mongo-sanatize)
- [ ] Redo design if needed
- [ ] Remove some leftover SCSS
- [ ] Add autosave in coding challenge
- [ ] Fix CSS form
- [ ] Send email to minorwebdev@gmail.com notifying someones done

## License 📜
[Check out the license here!](https://github.com/cmda-minor-web/intake-tool/blob/master/LICENSE)
