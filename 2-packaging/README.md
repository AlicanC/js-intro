# Packaging

You will turn your repository into a **package**, add a **dependency** and code a simple application using the dependency.

## Tasks

- Launch a command line and install [Yarn](https://yarnpkg.com/) with `npm install --global yarn`
- Go to your project directory.
- Generate a [package.json](https://docs.npmjs.com/files/package.json): `yarn init`
- Read the file named `package.json.md` to learn more about "package.json".
- Open `package.json` and add a script named "start"
  - Add an object named "scripts".
  - Add a property called "start" to that object with the string value `"node index.js"`.
  - Save the file.
- Observe that your application has executed and exited successfully: `yarn start`
- Add [express](https://github.com/expressjs/express) to your package as a dependency: `yarn add express`
- Open `index.js` and modify it to look like `example.js`
- Start your application: `yarn start`
- Visit `http://localhost:1337/` with the browser of your choice.
- Go back to the command line and press `CTRL+C` to stop your application.
- Make Git ignore the "node_modules" directory
  - Create a file named `.gitignore` and open it.
  - Write `/node_modules/`.
  - Save the file.
- See what files you have added and/or changed: `git status`
- Stage all changes for committing: `git add -A`
- Commit and push your changes.
- Remove your project completely from your machine.
- Go to your repositories directory: `cd ~/Repos/JaneDoe/`
- Clone your project: `git clone git@github.com:JaneDoe/hello-world.git`
- Go to project directory: `cd hello-world`
- Install the dependencies listed in package's "package.json": `yarn install`
- Start your application: `yarn start`
- Visit `http://localhost:1337/` with the browser of your choice.

Congratulations. You have created a package, added a dependency, written a web server using it and shared it with the whole world.
