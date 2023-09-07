Goto: https://www.katacoda.com/scenario-examples/courses/environment-usages/nodejs

1. install cargo and circom
```
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

2. install circom
```
source "$HOME/.cargo/env"

git clone https://github.com/iden3/circom.git
cd circom

cargo build --release
cargo install --path circom
```
3. circom compilation and snarkjs verification
```
curl -LSfs https://raw.githubusercontent.com/github167/demo-circom2/main/init.sh | sh
```
