Goto: https://www.katacoda.com/scenario-examples/courses/environment-usages/nodejs

1. install cargo and circom
```
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf > install_cargo.sh
chmod u+x install_cargo.sh
./install_cargo.sh -y
source "$HOME/.cargo/env"
git clone https://github.com/iden3/circom.git
cd circom

cargo build --release
cargo install --path circom

```

2. circom compilation and snarkjs verification
```
curl -LSfs https://raw.githubusercontent.com/github167/demo-circom2/main/init.sh | sh

```
