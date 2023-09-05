Goto: https://www.katacoda.com/scenario-examples/courses/environment-usages/nodejs

1. install cargo
```
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```
2. circom compilation and snarkjs verification
```
source "$HOME/.cargo/env"
curl -LSfs https://raw.githubusercontent.com/github167/demo-circom2/main/init.sh | sh
```


lesson learn

1. circuitJson=circom(circuit.circom)
2. circuit=snarkjs.circuit(circuitJson) -> setup=snarkjs.groth.setup(circuit) -> extract setup.vk_proof and setup.vk_verifier
3. prepare testInput -> witness=snarkjs.Circuit(circuitDef).calculateWitness(testInput) -> {proof, publicsignals}=snarkjs.groth.genProof(pk.json, witness)
4. answer=snarkjs.groth.isValid(vk.json, proof, publicSignals)
