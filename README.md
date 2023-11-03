Source: https://github.com/ChihChengLiang/poseidon-tornado

Playground: https://www.katacoda.com/scenario-examples/courses/environment-usages/nodejs

Upgrade nodejs
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install node

```
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

# LinkError: WebAssembly.instantiate(): Import #1 module="runtime" function="printErrorMessage" error: function import requires a callable
# at Object.builder [as WitnessCalculatorBuilder] (node_modules/circom_runtime/build/main.cjs:100:40)
# at async wtnsCalculate (node_modules/snarkjs/build/main.cjs:1130:16)
# at async Object.groth16FullProve [as fullProve] (node_modules/snarkjs/build/main.cjs:1171:5)
# at async prove (tests/ETHTornado.test.ts:80:23)
# at async Context.<anonymous> (tests/ETHTornado.test.ts:169:26)
```
Playground:
https://www.katacoda.com/scenario-examples/courses/environment-usages/nodejs
https://codedamn.com/online-compiler/node#start
