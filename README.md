# learnReact

## NodeJS
- There is no window object instead there is a global object.
- There is also no document object instead there is a process object.
  ```powershell
    PS C:\WINDOWS\system32> node
    Welcome to Node.js v16.14.0.
    Type ".help" for more information.
    > var name = "Shape";
    undefined
    > name
    'Shape'
    > global.name
    'Shape'
    > process
    process {
      version: 'v16.14.0',
      versions: {
        node: '16.14.0',
        v8: '9.4.146.24-node.20',...
  ```
- You can execute files by passing the name of the file to node.  The file extension is optional.
  ```powershell
  PS C:\inetpub\learn\learnReact\nodejs> Set-Content .\Module1.js 'console.log("Hello, World!");'
  PS C:\inetpub\learn\learnReact\nodejs> node .\Module1.js
  Hello, World!
  PS C:\inetpub\learn\learnReact\nodejs> node Module1
  Hello, World!
  ```
- We can create an empty module and require it from another and it will export an empty object
  ```powershell
  PS C:\inetpub\learn\learnReact\nodejs> Set-Content .\Module2.js ''
  PS C:\inetpub\learn\learnReact\nodejs> Set-Content .\Main.js "var m2 = require('./Module2');`rconsole.log(m2);"
  PS C:\inetpub\learn\learnReact\nodejs> node Main
  {}
  ```
- We can add elements to the object.  We can shorten `module.exports` to `exports`, either will work.
  ```powershell
  PS C:\inetpub\learn\learnReact\nodejs> Set-Content .\Module2.js "var a = 1;`rvar b = 2;`rmodule.exports.a = a;`rexports.b = b;"
  PS C:\inetpub\learn\learnReact\nodejs> node Main
  { a: 1, b: 2 }
  ```
- We can also override the `module.exports` with a function.  We can then call it as a function, `m1();` in this case.
  ```powershell
  PS C:\inetpub\learn\learnReact\nodejs> Set-Content .\Module1.js "module.exports = () => {`r  console.log('I am Module1');`r};"
  PS C:\inetpub\learn\learnReact\nodejs> Set-Content .\Main.js "var m1 = require('./Module1');`rvar m2 = require('./Module2');`rm1();`rconsole.log(m2);"
  PS C:\inetpub\learn\learnReact\nodejs> node Main
  I am Module1
  { a: 1, b: 2 }
  ```
- We can also install modules using the node package manager, npm.  This will install them under the `node_modules` folder.  We can then require it.  Note, we do not need to specify the path, it knows to look inside the `node_modules` folder.  The package has a `package.json` file which among other things specifies the entry point for the package.  Here is more about the [package.json](https://nodejs.dev/learn/the-package-json-guide).  
  ```powershell
  PS C:\inetpub\learn\learnReact\nodejs> New-Item project -ItemType Directory
  PS C:\inetpub\learn\learnReact\nodejs> cd .\project\
  PS C:\inetpub\learn\learnReact\nodejs\project> npm install moment

  added 1 package, and audited 2 packages in 5s

  found 0 vulnerabilities
  PS C:\inetpub\learn\learnReact\nodejs\project> Set-Content .\Main.js "var moment = require('moment');`rconsole.log(moment().format('MMMM Do YYYY, h:mm:ss a'));"
  PS C:\inetpub\learn\learnReact\nodejs\project> node Main
  July 29th 2022, 12:03:21 am
  ```
- As we add more modules and our project grows we may want to distribute it so other developers can use or contribute to it.  We can do this by creating our own package.  This way a new developer can get the exact modules we use at the correct versions.  To do that we need to initialize the package as follows.
  ```powershell
  PS C:\inetpub\learn\learnReact\nodejs\project> npm init
  This utility will walk you through creating a package.json file.
  It only covers the most common items, and tries to guess sensible defaults.

  See `npm help init` for definitive documentation on these fields
  and exactly what they do.

  Use `npm install <pkg>` afterwards to install a package and
  save it as a dependency in the package.json file.

  Press ^C at any time to quit.
  package name: (project)
  version: (1.0.0) 0.0.1
  description: Learn React first package
  entry point: (Main.js)
  test command:
  git repository:
  keywords:
  author: ShapeOus
  license: (ISC) MIT
  About to write to C:\inetpub\learn\learnReact\nodejs\project\package.json:

  {
    "dependencies": {
      "moment": "^2.29.4"
    },
    "name": "project",
    "version": "0.0.1",
    "description": "Learn React first package",
    "main": "Main.js",
    "devDependencies": {},
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "ShapeOus",
    "license": "MIT"
  }

  Is this OK? (yes) yes
  ```
- The `node_modules` folder contains other people's code and even binary executables so make sure to ignore it using a `.gitignore' file as follows.
  ```powershell
  PS C:\inetpub\learn\learnReact\nodejs\project> Set-Content .\.gitignore "mode_modules"
  ```
- Now we can install additional packages and they will be automatically added to the package dependencies.  Like before, we can then require and use the package in our `Main.js` script.  
  ```powershell
  PS /.../dev/learnReact/nodejs/project> npm install uuid

  added 1 package, and audited 3 packages in 2s

  found 0 vulnerabilities
  PS /.../dev/learnReact/nodejs/project> Get-Content ./Main.js
  var moment = require('moment');
  var { v4: uuidv4 } = require('uuid');
  console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
  console.log(uuidv4());
  PS /.../dev/learnReact/nodejs/project> node Main          
  July 31st 2022, 11:24:21 pm
  c89ec9e5-1c25-4703-b48f-f637c8154a8a
  ```
