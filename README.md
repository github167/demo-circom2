Goto: https://www.katacoda.com/scenario-examples/courses/environment-usages/nodejs

1. install cargo
```
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

1. snarkjs
```
source "$HOME/.cargo/env"
curl -LSfs https://raw.githubusercontent.com/github167/demo-circom2/init.sh | sh
```

2. test from official js
```
node build/mastermind/src/compile.js \
  -i mastermind/circuits/mastermind.circom \
  -o mastermind/circuits/mastermind.json -r

mkdir -p mastermind/setup && \
node build/mastermind/src/trustedsetup.js \
  -i mastermind/circuits/mastermind.json \
  -pk mastermind/setup/mastermind.pk.json \
  -vk mastermind/setup/mastermind.vk.json -r

mkdir -p mastermind/proofs mastermind/signals && \
node build/mastermind/src/generateproof.js \
  -c mastermind/circuits/mastermind.json \
  -vk mastermind/setup/mastermind.vk.json \
  -pk mastermind/setup/mastermind.pk.json \
  -po mastermind/proofs/mastermind.proof.json \
  -so mastermind/signals/testsignals.json

node build/mastermind/src/test_js_verification.js \
  -c mastermind/circuits/mastermind.json \
  -vk mastermind/setup/mastermind.vk.json \
  -p mastermind/proofs/mastermind.proof.json \
  -s mastermind/signals/testsignals.json

```

3. generate our own keys and test
```
cd my
node 1-compile.js
node 2-pkvk.js
node 3-genProof.js
node 4-verify.js
```
lesson learn

1. circuitJson=circom(circuit.circom)
2. circuit=snarkjs.circuit(circuitJson) -> setup=snarkjs.groth.setup(circuit) -> extract setup.vk_proof and setup.vk_verifier
3. prepare testInput -> witness=snarkjs.Circuit(circuitDef).calculateWitness(testInput) -> {proof, publicsignals}=snarkjs.groth.genProof(pk.json, witness)
4. answer=snarkjs.groth.isValid(vk.json, proof, publicSignals)
