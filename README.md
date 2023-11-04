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
prove
```
cd build
node withdraw_js/generate_witness.js withdraw_js/withdraw.wasm input.json withdraw_js/withdraw.wtns
snarkjs groth16 prove circuit_final.zkey withdraw_js/withdraw.wtns proof.json public.json
snarkjs groth16 verify verification_key.json public.json proof.json

snarkjs groth16 fullprove input.json withdraw_js/withdraw.wasm circuit_final.zkey proof.json public.json
snarkjs groth16 verify verification_key.json public.json proof.json

```

Test
```
npm install snarkjs@0.4.26
npm run test

```
Playground:
https://www.katacoda.com/scenario-examples/courses/environment-usages/nodejs
https://codedamn.com/online-compiler/node#start
