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
