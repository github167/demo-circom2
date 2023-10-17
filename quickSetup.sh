# Use existing public phase 1 setup
PHASE1=build/phase1_final.ptau
PHASE2=build/phase2_final.ptau
CIRCUIT_ZKEY=build/circuit_final.zkey

curl -o $PHASE2 https://hermez.s3-eu-west-1.amazonaws.com/powersOfTau28_hez_final_16.ptau
npx snarkjs zkey new build/withdraw.r1cs $PHASE2 $CIRCUIT_ZKEY

npx snarkjs zkey export verificationkey $CIRCUIT_ZKEY build/verification_key.json


npx snarkjs zkey export solidityverifier $CIRCUIT_ZKEY build/Verifier.sol
# Fix solidity version (and want the command to work on both linux and mac)
cd build/ && sed 's/0\.6\.11/0\.7\.3/g' Verifier.sol > tmp.txt && mv tmp.txt Verifier.sol && cd ..
#cd contracts && ln -s ../build/Verifier.sol Verifier.sol && cd ..
cp build/Verifier.sol contracts/Verifier.sol
