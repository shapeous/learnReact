# learnReact

## NodeJS
- There is no window object instead there is a global object
- There is also no document object there is a process
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
