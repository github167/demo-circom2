Source: https://github.com/ChihChengLiang/poseidon-tornado

Install
```
git clone -b poseidon-tornado https://github.com/github167/demo-circom2
cd demo-circom2
npm install

```
Compile
```
#npm run compile circuits #need to run "circom"
npm run setup
npm run compile
```

Test
```
npm run test
# LinkError: WebAssembly.instantiate(): Import #1 module="runtime" function="printErrorMessage" error: function import requires a callable
```
Playground: https://www.katacoda.com/scenario-examples/courses/environment-usages/nodejs
