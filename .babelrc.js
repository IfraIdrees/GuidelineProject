const plugins = [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ["./src/"],
        alias: {
          "button-index": "./src/Component/Button/index.js"
        }
      }
  
    ]
  
  ];