
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
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'allowance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'needed',
        type: 'uint256',
      },
    ],
    name: 'ERC20InsufficientAllowance',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'needed',
        type: 'uint256',
      },
    ],
    name: 'ERC20InsufficientBalance',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'approver',
        type: 'address',
      },
    ],
    name: 'ERC20InvalidApprover',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
    ],
    name: 'ERC20InvalidReceiver',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
    ],
    name: 'ERC20InvalidSender',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'ERC20InvalidSpender',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'log',
        type: 'string',
      },
    ],
    name: 'Burn_log',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'log',
        type: 'string',
      },
    ],
    name: 'Mint_log',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'userAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'status',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'message',
        type: 'string',
      },
    ],
    name: 'response',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'log',
        type: 'string',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'contract_owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_deleteAddress',
        type: 'address',
      },
    ],
    name: 'deleteUser',
    outputs: [
      {
        internalType: 'bool',
        name: 'status',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
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
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_get_refferal_address',
        type: 'address',
      },
    ],
    name: 'getAllUsers_refferal_user',
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
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_getAddress',
        type: 'address',
      },
    ],
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
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'buyer_wallet_address',
        type: 'address',
      },
    ],
    name: 'mini_buy_status_change',
    outputs: [
      {
        internalType: 'bool',
        name: 'status',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'log',
        type: 'string',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_new_per_msn_usdt_reffer',
        type: 'uint256',
      },
    ],
    name: 'per_msn_usdt_change',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'per_reffer',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_new_perreffer',
        type: 'uint256',
      },
    ],
    name: 'per_reffer_change',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'per_reffer_with_minimum_buy',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_new_minimumbuy_per_reffer',
        type: 'uint256',
      },
    ],
    name: 'per_reffer_with_minimum_buy_change',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'per_usdt_msn',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
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
    name: 'registerUser',
    outputs: [
      {
        internalType: 'bool',
        name: 'status',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'show_per_reffer',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'show_per_reffer_with_minimum_buy',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'show_per_usdt_msn',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tele_bot_link',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user_address',
        type: 'address',
      },
    ],
    name: 'withdraw_funds',
    outputs: [
      {
        internalType: 'bool',
        name: 'status',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

window.onload = () =>{
  let my_wallet_address = '0xC493ab45Dec7d3a98297D6d16f4614277D7B3BB6';

  const sepolia_rpc =
    'https://eth-sepolia.g.alchemy.com/v2/b1qu65NnDmm0ngvQY49HrF2aD2_oD5ih';

  const tokenAddress = '0x1D28E63852F3bC956fa6bE7B087f0E4Fe43a3928';

  const provider = new ethers.providers.JsonRpcProvider(sepolia_rpc);

  const wallet = new ethers.Wallet(
    '9936ffd8c463b8e12018c8d441932b942e7467be27a9cdf4086a7b5c15c0706d',
    provider,
  );

  let contract = new ethers.Contract(tokenAddress, tokenAbi, wallet);

  // ====================================================================================================
    async function get_response(receipt) {
    let logs_array = [false, false, false];
    try {
        const txReceipt = await provider.getTransactionReceipt(
        receipt.transactionHash,
        );

        txReceipt.logs.forEach((log) => {
        const parsedLog = ethers.utils.defaultAbiCoder.decode(
            ['address', 'bool', 'string'],
            log.data,
        );
        logs_array[0] = parsedLog[0];
        logs_array[1] = parsedLog[1];
        logs_array[2] = parsedLog[2];
        });
    } catch (error) {
        return logs_array;
    }

    return logs_array;
    }

    
  // get eth price in usdt
  let eth_usdt_price = 0;
  async function getCryptoPriceInUSDT() {
    try {
      const apiUrl = `https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      eth_usdt_price = data.price / 1e18;
    } catch (error) {
      console.error('Error fetching cryptocurrency price:', error);
      return null;
    }
  }
  getCryptoPriceInUSDT();
  function get_usdt_by_wei(weiValue) {
    if (eth_usdt_price != '0' || eth_usdt_price != 0) {
      return eth_usdt_price * weiValue;
    } else {
      return null;
    }
  }

  // get all users
  let table_body_alluser = document.querySelector('.all_user_table_body');
  async function get_all_user() {
    const reffered_user = await contract.getAllUsers();

    let all_us_ar = ``;
    if (reffered_user) {
      reffered_user.forEach((ref_u_r) => {
        all_us_ar += `
                    <tr>
                        <td>${ref_u_r.userAddress}</td>
                        <td>${ref_u_r.userId}</td>
                        <td>${ref_u_r.referralUser}</td>
                        <td>${ref_u_r.myReferral}</td>
                        <td>${ref_u_r.referralPoint}</td>
                        <td>${ref_u_r.min_buy_status}</td>
                    </tr>
              `;
      });
      table_body_alluser.innerHTML = all_us_ar;
    }
  }
  document.querySelector('.get_all_user_btn')
    .addEventListener('click', async function () {
      table_body_alluser.innerHTML = `<div style="text-align: center; width:100%;">Fething...</div>`;
      await get_all_user();
     });

  // get refferal points
  let get_re_p_bt = document.querySelector('.get_reffer_point');

  let per_connect_point = document.querySelector('.reffer_c_p');
  let per_buy_point = document.querySelector('.reffer_b_p');
  let waiting_p_g_mes = document.querySelector('.waiting_p_g_mes');
  async function get_refferal_points() {
    const per_co_re_p = (await contract.show_per_reffer()).toString();
    const per_b_re_p = (await contract.show_per_reffer_with_minimum_buy()).toString();

    per_connect_point.value = per_co_re_p;
    per_buy_point.value = per_b_re_p;
    waiting_p_g_mes.innerText = '';
  }
  get_re_p_bt.addEventListener('click', async function () {
    waiting_p_g_mes.innerText = 'Wait...';
    await get_refferal_points();
    waiting_p_g_mes.innerText = '';
  });

  // get bnb tx details
  let fetching_tx_t_s = document.querySelector('.fetching_tx_t_s');
  let get_user_bt_b_tx = document.querySelector('.get_user_tx');
  let all_bnb_tx_div = document.querySelector('.all_bnb_tx_div');
  async function get_bnb_tx(user_address, my_address) {
    // await getCryptoPriceInUSDT();

    let tx_div_v = ``;
    function setyp_all_b_tx(transactions) {
      let count_tx = 1;
      transactions.forEach(async (element) => {
        let usdt_se = get_usdt_by_wei(element['value']).toFixed(3);
        tx_div_v += `
                <div class="tx_hash_row"><b>${count_tx}. </b>Tx Hash - <a target="_blank" href="https://bscscan.com/tx/${element['hash']}">${element['hash']}</a> ---- <span>Value:- &nbsp; ${usdt_se} USDT</span></div>
                `;
        count_tx++;
      });

      all_bnb_tx_div.innerHTML = tx_div_v;
    }

    try {
      const apiUrl = `https://api.bscscan.com/api?module=account&action=txlist&address=${user_address}&startblock=0&endblock=99999999&sort=desc&apikey=YU2D1Z764SGI4ETN5QBJWVX8INSF1P19C3`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok && data.result) {
        const transactions = data.result.filter(
          (tx) => tx.to.toLowerCase() === my_address.toLowerCase(),
        );

        setyp_all_b_tx(transactions);
      } else {
        console.error('Failed to fetch transactions');
        return null;
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
      return null;
    }
  }

  get_user_bt_b_tx.addEventListener('click', async function () {
    let user_address_input = document
      .querySelector('.user_address_input')
      .value.trim();
    
    if (user_address_input == '' || user_address_input == null) {
    alert('please enter user address');
    return;
    }

    fetching_tx_t_s.innerText = 'Fething...';
    await get_bnb_tx(user_address_input, my_wallet_address);
    fetching_tx_t_s.innerText = '';
  });

  // get per usdt token value
  let get_p_m_v_btn = document.querySelector('.get_per_ud_t_btn');
  let p_u_to_v_input = document.querySelector('.p_u_to_v');
  let get_usdt_per_msnT = document.querySelector('.get_usdt_per_msnT');
  async function get_per_usdt_token() {
    const per_co_re_p = (await contract.show_per_usdt_msn()).toString();

    p_u_to_v_input.value = per_co_re_p;
  }

  get_p_m_v_btn.addEventListener('click', async function () {
    get_usdt_per_msnT.innerText = 'Wait....';
    await get_per_usdt_token();
    get_usdt_per_msnT.innerText = '';
  });

  /// get single user details by wallet address
  // get all users
  let table_body_singleuser = document.querySelector('.single_user_table_body');
  let single_user_w_a_i = document.querySelector('.single_user_w_a_i');
  async function get_single_user(address) {
    const singleUser_user = await contract.getUser(address.trim());

    let single_us_ar = ``;
    if (singleUser_user) {
        single_us_ar += `
            <tr>
                <td>${singleUser_user[0].toString()}</td>
                <td>${singleUser_user[1].toString()}</td>
                <td>${singleUser_user[2].toString()}</td>
                <td>${singleUser_user[3].toString()}</td>
                <td>${singleUser_user[4].toString()}</td>
                <td>${singleUser_user[5].toString()}</td>
            </tr>
        `;
      table_body_singleuser.innerHTML = single_us_ar;
    }else{

    }
  }

  document.querySelector('.get_single_user_btn').addEventListener('click', async function () {

        if (single_user_w_a_i.value == '' || single_user_w_a_i.value == null){
         alert('please enter user address');
         return ;
        }

        table_body_singleuser.innerHTML = `<div style="text-align: center; width:100%;">Fething...</div>`;
        await get_single_user(single_user_w_a_i.value);
    });

    // ======================== updateing... ===========================

    try {
      let update_per_reffer_input = document.querySelector(
        '.update_per_reffer_input',
      );
      let update_per_reffer_btn = document.querySelector(
        '.update_per_reffer_btn',
      );

      let update_buy_input = document.querySelector('.update_buy_input');
      let update_buy_btn = document.querySelector('.update_buy_btn');

      update_per_reffer_btn.addEventListener('click', async function () {
        if (
          update_per_reffer_input.value == '' ||
          update_per_reffer_input.value == null
        ) {
          alert('please enter number');
          return;
        }
        if (confirm('update ?')) {
          waiting_p_g_mes.innerText = 'Wait...';
          let per_reffer_change_status = await contract.per_reffer_change(
            update_per_reffer_input.value,
          );
          let reci = per_reffer_change_status.wait();
          alert('done');
          waiting_p_g_mes.innerText = '';
        } else {
          return;
        }
      });

      update_buy_btn.addEventListener('click', async function () {
        if (update_buy_input.value == '' || update_buy_input.value == null) {
          alert('please enter number');
          return;
        }
        if (confirm('update ?')) {
          waiting_p_g_mes.innerText = 'Wait...';
          let per_buy_change_status =
            await contract.per_reffer_with_minimum_buy_change(update_buy_input.value, );
          let reci_1 = per_buy_change_status.wait();
          alert('done');
          waiting_p_g_mes.innerText = '';
        } else {
          return;
        }
      });
    } catch (error) {
      console.log(error);
    }

    let per_msn_usdt_ubtn = document.querySelector('.per_msn_usdt_ubtn');
    let p_u_to_v = document.querySelector('.p_u_to_v');

    try {
        per_msn_usdt_ubtn.addEventListener('click', async function () {
            if (p_u_to_v.value == '' || p_u_to_v.value == null) {
            alert('please enter number');
            return;
            }
            if (confirm('update ?')) {
            get_usdt_per_msnT.innerText = 'Wait...';
            let per_buy_change_status = await contract.per_msn_usdt_change(
                p_u_to_v.value,
            );
            let reci_3 = per_buy_change_status.wait();
            alert('done');
            get_usdt_per_msnT.innerText = '';
            } else {
            return;
            }
        });
    } catch (error) {
        console.log(error);
    }

}