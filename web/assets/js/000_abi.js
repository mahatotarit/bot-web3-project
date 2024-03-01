let tokenAbi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'symbol',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'ini_supply',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'contract_owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'getAllUsers',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'userAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'userId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'referralUser',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'myReferral',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'referralPoint',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'min_buy_status',
            type: 'bool',
          },
        ],
        internalType: 'struct MSN.User[]',
        name: '',
        type: 'tuple[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'getAllUsers_refferal_user',
    inputs: [
      {
        internalType: 'address',
        name: '_get_refferal_address',
        type: 'address',
      },
    ],
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'userAddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'userId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'referralUser',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'myReferral',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'referralPoint',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'min_buy_status',
            type: 'bool',
          },
        ],
        internalType: 'struct MSN.User[]',
        name: '',
        type: 'tuple[]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'getUser',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'per_reffer',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'external',
    type: 'function',
    name: 'per_reffer_change',
    inputs: [
      {
        internalType: 'uint256',
        name: '_new_perreffer',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'per_reffer_with_minimum_buy',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'external',
    type: 'function',
    name: 'per_reffer_with_minimum_buy_change',
    inputs: [
      {
        internalType: 'uint256',
        name: '_new_minimumbuy_per_reffer',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'external',
    type: 'function',
    name: 'registerUser',
    inputs: [
      {
        internalType: 'address',
        name: '_userAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_userId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_referralUser',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        internalType: 'bool',
        name: 'status',
        type: 'bool',
      },
    ],
  },
  {
    stateMutability: 'payable',
    type: 'function',
    name: 'send_MSN_to_contract',
    inputs: [
      {
        internalType: 'address',
        name: 'buyer_wallet_address',
        type: 'address',
      },
    ],
    outputs: [
      {
        internalType: 'bool',
        name: 'success_status',
        type: 'bool',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'total_supply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
  },
];

