# Environment

You will write **JavaScript** using **Atom**, manage your code using **Git** and store your Git repository in **GitHub**, and run your code using **Node.js**.

[Programming Language](https://en.wikipedia.org/wiki/Programming_language): [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

[Source Code Editor](https://en.wikipedia.org/wiki/Source_code_editor): [Atom](https://en.wikipedia.org/wiki/Atom_(text_editor)

[Version Control](https://en.wikipedia.org/wiki/Version_control): [Git](https://en.wikipedia.org/wiki/Git) and [GitHub](https://en.wikipedia.org/wiki/GitHub)

[Runtime System](https://en.wikipedia.org/wiki/Runtime_system): [Node.js](https://en.wikipedia.org/wiki/Node.js)

## Tasks

- [Install Git](https://git-scm.com/downloads)
- [Install Node.js](https://nodejs.org/en/download/current/)
- [Install Atom](https://flight-manual.atom.io/getting-started/sections/installing-atom/)
- [Join GitHub](https://github.com/join)
- [Generate an SSH key](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Add generated SSH key to GitHub](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account)
- [Create a Git repository on GitHub](https://help.github.com/articles/create-a-repo/)
  (Skip the "Commit your first change" part.)
- Create a directory on your computer to store your repositories
  - Launch a command line. (PowerShell on Windows, Terminal on macOS.)
  - Go to your user directory: `cd ~`
  - Create a directory for repositories: `mkdir Repos`
  - Enter the directory: `cd Repos`
  - Create a directory for your own repositories: `mkdir JaneDoe`
  - Enter the directory: `cd JaneDoe`
  - You are now at `~/Repos/JaneDoe/`, stay there.
- [Clone the created Git repository](https://help.github.com/articles/cloning-a-repository/)
  (Clone using SSH and not HTTPS. You should have a directory containing "README.md" at `~/Repos/JaneDoe/hello-world/` after you are done.)
- Open the repository directory with Atom
  - Go to repository directory if you are not already there: `cd ~/Repos/JaneDoe/hello-world/`
  - Open the directory with Atom: `atom .` (The dot in the end means "current directory".)
- Write your first program
  - Create a file named "index.js"
    - Right-click on "hello-world" directory in the File Tree.
    - Select `New -> File`
  - Type `console.log('Hello world!');` in the file.
  - Save the file.
- Run your program
  - Go to repository directory if you are not already there: `cd ~/Repos/JaneDoe/hello-world/`
  - Run "index.js": `node index.js`
- Stage, commit and push your changes:
  - Stage "index.js": `git add index.js`
  - Commit staged changes: `git commit -m "Yay!"`
  - Push the new commit: `git push`

Congratulations. You have installed everything you need, setup a GitHub account, created a repository, wrote a program and shared it with the whole world.
