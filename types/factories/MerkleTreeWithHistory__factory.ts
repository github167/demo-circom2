/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MerkleTreeWithHistory,
  MerkleTreeWithHistoryInterface,
} from "../MerkleTreeWithHistory";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_treeLevels",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_hasher",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FIELD_SIZE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_HISTORY_SIZE",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ZERO_VALUE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRootIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "filledSubtrees",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_left",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_right",
        type: "bytes32",
      },
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hasher",
    outputs: [
      {
        internalType: "contract Hasher",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "isKnownRoot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "levels",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "roots",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "zeros",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040526000600360006101000a81548163ffffffff021916908363ffffffff1602179055506000600360046101000a81548163ffffffff021916908363ffffffff16021790555034801561005457600080fd5b50604051610d50380380610d508339818101604052604081101561007757600080fd5b81019080805190602001909291908051906020019092919050505060008263ffffffff16116100f1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526027815260200180610d076027913960400191505060405180910390fd5b60208263ffffffff1610610150576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610d2e6022913960400191505060405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508163ffffffff1660808163ffffffff1660e01b8152505060007f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c60001b9050600281908060018154018082558091505060019003906000526020600020016000909190919091505560018190806001815401808255809150506001900390600052602060002001600090919091909150556000600190505b8363ffffffff168163ffffffff1610156102ad5761024c82836102d960201b60201c565b9150600282908060018154018082558091505060019003906000526020600020016000909190919091505560018290806001815401808255809150506001900390600052602060002001600090919091909150558080600101915050610228565b506102be81826102d960201b60201c565b60046000606481106102cc57fe5b018190555050505061050c565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018360001c10610373576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f5f6c6566742073686f756c6420626520696e7369646520746865206669656c6481525060200191505060405180910390fd5b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018260001c106103ee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180610ce66021913960400191505060405180910390fd5b6103f66104ea565b604051806040016040528085815260200184815250905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663299e5660826040518263ffffffff1660e01b81526004018082600260200280838360005b83811015610484578082015181840152602081019050610469565b5050505090500191505060206040518083038186803b1580156104a657600080fd5b505afa1580156104ba573d6000803e3d6000fd5b505050506040513d60208110156104d057600080fd5b810190808051906020019092919050505091505092915050565b6040518060400160405280600290602082028036833780820191505090505090565b60805160e01c6107bd6105296000398061057f52506107bd6000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063c2b40ae41161008c578063ec73295911610066578063ec73295914610290578063ed33639f146102ae578063f178e47c146102e2578063fc7e9c6f14610324576100cf565b8063c2b40ae4146101e8578063cd87a3b41461022a578063e82955881461024e576100cf565b806338bf282e146100d4578063414a37ba146101205780634ecf518b1461013e5780636d9833e31461016257806390eeb02b146101a6578063ba70f757146101ca575b600080fd5b61010a600480360360408110156100ea57600080fd5b810190808035906020019092919080359060200190929190505050610348565b6040518082815260200191505060405180910390f35b610128610559565b6040518082815260200191505060405180910390f35b61014661057d565b604051808263ffffffff16815260200191505060405180910390f35b61018e6004803603602081101561017857600080fd5b81019080803590602001909291905050506105a1565b60405180821515815260200191505060405180910390f35b6101ae610643565b604051808263ffffffff16815260200191505060405180910390f35b6101d2610659565b6040518082815260200191505060405180910390f35b610214600480360360208110156101fe57600080fd5b8101908080359060200190929190505050610687565b6040518082815260200191505060405180910390f35b61023261069f565b604051808263ffffffff16815260200191505060405180910390f35b61027a6004803603602081101561026457600080fd5b81019080803590602001909291905050506106a4565b6040518082815260200191505060405180910390f35b6102986106c5565b6040518082815260200191505060405180910390f35b6102b66106e9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61030e600480360360208110156102f857600080fd5b810190808035906020019092919050505061070d565b6040518082815260200191505060405180910390f35b61032c61072e565b604051808263ffffffff16815260200191505060405180910390f35b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018360001c106103e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f5f6c6566742073686f756c6420626520696e7369646520746865206669656c6481525060200191505060405180910390fd5b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018260001c1061045d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806107676021913960400191505060405180910390fd5b610465610744565b604051806040016040528085815260200184815250905060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663299e5660826040518263ffffffff1660e01b81526004018082600260200280838360005b838110156104f35780820151818401526020810190506104d8565b5050505090500191505060206040518083038186803b15801561051557600080fd5b505afa158015610529573d6000803e3d6000fd5b505050506040513d602081101561053f57600080fd5b810190808051906020019092919050505091505092915050565b7f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000181565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008060001b8214156105b7576000905061063e565b6000600360009054906101000a900463ffffffff1690505b60048163ffffffff16606481106105e257fe5b01548314156105f557600191505061063e565b60008163ffffffff16141561060957606490505b808060019003915050600360009054906101000a900463ffffffff1663ffffffff168163ffffffff1614156105cf5760009150505b919050565b600360009054906101000a900463ffffffff1681565b60006004600360009054906101000a900463ffffffff1663ffffffff166064811061068057fe5b0154905090565b6004816064811061069457fe5b016000915090505481565b606481565b600281815481106106b157fe5b906000526020600020016000915090505481565b7f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c81565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6001818154811061071a57fe5b906000526020600020016000915090505481565b600360049054906101000a900463ffffffff1681565b604051806040016040528060029060208202803683378082019150509050509056fe5f72696768742073686f756c6420626520696e7369646520746865206669656c64a26469706673582212208a9325cd401358e2b664afc515f401a860d893a267bdfe7e7b59a24eef420e8d64736f6c634300070300335f72696768742073686f756c6420626520696e7369646520746865206669656c645f747265654c6576656c732073686f756c642062652067726561746572207468616e207a65726f5f747265654c6576656c732073686f756c64206265206c657373207468616e203332";

export class MerkleTreeWithHistory__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _treeLevels: BigNumberish,
    _hasher: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MerkleTreeWithHistory> {
    return super.deploy(
      _treeLevels,
      _hasher,
      overrides || {}
    ) as Promise<MerkleTreeWithHistory>;
  }
  getDeployTransaction(
    _treeLevels: BigNumberish,
    _hasher: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_treeLevels, _hasher, overrides || {});
  }
  attach(address: string): MerkleTreeWithHistory {
    return super.attach(address) as MerkleTreeWithHistory;
  }
  connect(signer: Signer): MerkleTreeWithHistory__factory {
    return super.connect(signer) as MerkleTreeWithHistory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleTreeWithHistoryInterface {
    return new utils.Interface(_abi) as MerkleTreeWithHistoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleTreeWithHistory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MerkleTreeWithHistory;
  }
}
