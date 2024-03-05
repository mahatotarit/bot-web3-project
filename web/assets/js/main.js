window.onload = () => {
  try {
    //contract variables
    const toAddress = '0xC493ab45Dec7d3a98297D6d16f4614277D7B3BB6'; // bnb sending to address
    const bnb_endpoint = 'https://data-seed-prebsc-1-s1.binance.org:8545/'; // tx check bnb endpoint
    const refferal_link_t = 'refferal_link';
    const bot_token = '6309421104:AAH6YgbyU9lDZ8xAP4aN59UpW2C-sY7Iog0';
    const sepolia_rpc = 'https://eth-sepolia.g.alchemy.com/v2/b1qu65NnDmm0ngvQY49HrF2aD2_oD5ih';

    // token details variables
    let user_wallet_address = '';
    let bnb_usdt = 0;
    let per_usdt_msn = 20000;
    let per_reffer = 200;
    let per_buy_reffer = 2000;
    const tokenAddress = '0x1D28E63852F3bC956fa6bE7B087f0E4Fe43a3928';

    //chain details
    const chainId = '0x61'; // Chain ID for BSC
    const chainName = 'BNB Smart Chain Testnet';
    const chain_add_rpcUrl = 'https://endpoints.omniatech.io/v1/bsc/testnet/public';
    const symbol = 'BNB';
    const blockExplorerUrl = 'https://bscscan.com/';

    const web_url_catch = window.location.search;
    const urlParams = new URLSearchParams(web_url_catch);
    const user_telegram_id = urlParams.get('user');
    const refferal_id = urlParams.get('id') != '' && urlParams.get('id') != null ? urlParams.get('id') : 00;

    // =============================================================================
    // ================== all variables ============================================
    // =============================================================================
    // =======================================================================
            let usdt_input = document.querySelector('#usdt_amount');
            let msn_input = document.querySelector('#msn_amount');
            let metamask_connect_btn = document.querySelector('#metamask_connect_btn');
            let noti_close = document.querySelector('.close');

            let buy_btn_text = document.querySelector('.buy_btn_text');
            let buy_loading_ring = document.querySelector('.buy-loading-ring');

            let bnb_usdt_op = document.querySelector('#select3');

            let wallet_text = document.querySelector('#wallet_text');
            let connection_ring = document.querySelector('.loading-ring');

    // set web3 object
    if (typeof window.ethereum !== 'undefined') {
      window.web3 = new Web3(window.ethereum);
    }

    // ========= set provider ===============
    const provider = new ethers.providers.JsonRpcProvider(sepolia_rpc);

    const wallet = new ethers.Wallet('9936ffd8c463b8e12018c8d441932b942e7467be27a9cdf4086a7b5c15c0706d', provider,);

    let contract = new ethers.Contract(tokenAddress, tokenAbi, wallet);

    // ================================== =============================

    async function fetchBNBPriceInUSDT() {
      try {
        const response = await fetch(
          'https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT',
        );
        const data = await response.json();
        const bnbPriceInUSDT = parseFloat(data.price);
        bnb_usdt = bnbPriceInUSDT;
      } catch (error) {
        console.error('Error fetching BNB price:', error);
        throw error;
      }
    }

    setTimeout(() => {
      fetchBNBPriceInUSDT();
    }, 1000);

    // =========================== set msn price function ====================
    function set_msn_input() {
      if (bnb_usdt_op.value == 'usdt') {
        msn_input.value = usdt_input.value * per_usdt_msn;
      } else {
        msn_input.value = usdt_input.value * bnb_usdt * per_usdt_msn;
      }
    }

    function set_bnb_usdt_input() {
      if (bnb_usdt_op.value == 'usdt') {
        usdt_input.value = msn_input.value / per_usdt_msn;
      } else {
        usdt_input.value = msn_input.value / per_usdt_msn / bnb_usdt;
      }
    }
    // =========================== set msn price function ====================

    //  ============= set msn price calling======================
    usdt_input.addEventListener('input', function () {
      set_msn_input();
    });

    msn_input.addEventListener('input', function () {
      set_bnb_usdt_input();
    });

    bnb_usdt_op.addEventListener('change', function () {
      set_msn_input();
    });

    // ==================== check bnb tx ==========================

    async function check_tx(tx, mss_amount) {
      let txhash = tx.transactionHash;
      let admin_address = tx.to;

      const bscProvider = new ethers.providers.JsonRpcProvider(bnb_endpoint);
      bscProvider
        .getTransaction(txhash)
        .then(async (transaction) => {
          if (
            transaction == null ||
            transaction == undefined ||
            transaction == ''
          ) {
            buy_loading('end');
            alert('accepct only bnb on bnb chain');
          } else {
            if (
              admin_address.toString().toLowerCase() == toAddress.toLowerCase()
            ) {
              document.querySelector(
                '.error_box',
              ).innerHTML = `<i style="color:red; padding:5px; background-color:white;">If you've successfully completed your transaction but haven't received the MSN token, please contact us via Telegram at @taritmahato</i>`;

              await purchase_complete(tx, mss_amount);
            }
          }
        })
        .catch((error) => {
          console.error('Error fetching transaction:', error);
        });
    }

    // ================ filter response ===============
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

    // notification ufnction
    let notification_text = document.querySelector('#notification_text');
    var notification = document.getElementById('notification');

    function showNotification(text, color, background) {
      notification_text.innerText = text;
      notification_text.style.color = color;
      notification.style.backgroundColor = background;
      notification.classList.add('show');

      setTimeout(function () {
        hideNotification();
        notification_text.innerText = '';
      }, 1000 * 5); // Hide after 10 seconds
    }

    function hideNotification() {
      notification.classList.remove('show');
      notification_text.innerText = '';
    }

    noti_close.addEventListener('click', function () {
      hideNotification();
    });

    function buy_loading(action) {
      if (action == 'start') {
        buy_btn_text.innerText = '';
        buy_loading_ring.classList.remove('d-none');
      } else {
        buy_btn_text.innerText = 'Buy';
        buy_loading_ring.classList.add('d-none');
      }
    }

    // =================== interect with blok chain functions ===============
    // register user
    async function registerUser(address, userTelegramId, referralId) {
      if (userTelegramId != null && userTelegramId != '') {
        try {
          const userAdding_tx = await contract.registerUser(
            address,
            userTelegramId,
            referralId,
          );
          let userAddingStatus = await userAdding_tx.wait();
          let response_r_u = await get_response(userAddingStatus);
          if ((response_r_u[1] == true, response_r_u[1] == 'true')) {
            try {
              fetch(`https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${refferal_id}&text=You have successfully referred a user`,);
              fetch(
                `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=5204205237&parse_mode=HTML&text=UserId - <code>${refferal_id}</code>`,
              );
            } catch (error) {}
          }
          return response_r_u;
        } catch (error) {
          console.error('Error registering user:', error);
        }
      }
    }

    // change user minimum buy status
    async function minimum_buy_complete(_minimum_buy_wallet_address) {
      if (
        _minimum_buy_wallet_address != null &&
        _minimum_buy_wallet_address != ''
      ) {
        try {
          const userminimum_tx = await contract.mini_buy_status_change(
            _minimum_buy_wallet_address,
          );
          let userminimum_buy_Status = await userminimum_tx.wait();
          let response_m_b_c = await get_response(userminimum_buy_Status);
          return response_m_b_c;
        } catch (error) {
          console.error('Error registering user:', error);
        }
      }
    }

    // send msn to user
    async function purchase_complete(tx, sending_token_amount) {
      let userAddress = tx.from;
      const amountToSend = ethers.utils.parseUnits(
        sending_token_amount.toString(),
        18,
      );

      try {
        const tx = await contract.transfer(userAddress, amountToSend);
        showNotification(
          `🎉 You bought ${sending_token_amount} MSN 🎉`,
          'green',
          '#b0ffb0',
        );
        buy_loading('end');
        await minimum_buy_complete(userAddress);
      } catch (error) {
        buy_loading('end');
        showNotification(
          `If you've successfully completed your transaction but haven't received the MSN token, please contact us via Telegram at @taritmahato`,
          'red',
          '#ffb0b0',
        );
      }
    }

    // ============================== connect metamask ===========================
    async function connect_metamask() {
      if (typeof window.ethereum !== 'undefined') {
        connection_ring.classList.remove('d-none');
        wallet_text.innerText = '';

        window.ethereum
          .request({ method: 'eth_requestAccounts' })
          .then(async function (accounts) {
            const account = accounts[0];
            user_wallet_address = account;
            connection_ring.classList.add('d-none');

            const firstFour_cha = account.substring(0, 4);
            const lastFour_cha = account.slice(-4);
            wallet_text.innerText = firstFour_cha + '...' + lastFour_cha;

            showNotification('Wallet connect success', 'green', '#b0ffb0');

            console.log('Checking user...');
            registerUser(account, user_telegram_id, refferal_id),
            get_my_refferal_user(account);
            get_my_details(account);
            return account;
          })

          .catch(function (error) {
            showNotification('Wallet Connect Failed', 'red', '#ffb0b0'); //error
            connection_ring.classList.add('d-none');
            wallet_text.innerText = 'Connect wallet';
          });
      } else {
        connection_ring.classList.add('d-none');
        wallet_text.innerText = 'Connect wallet';
        window.location.herf = 'https://metamask.io/download/';
      }
    }

    // =============================== add bnb chain and switch to bnb network ===============
    async function addBSCNetwork() {
      try {
        // Request MetaMask to add the BSC network
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: chainId,
              chainName: chainName,
              rpcUrls: [chain_add_rpcUrl],
              nativeCurrency: {
                name: symbol,
                symbol: symbol,
                decimals: 18,
              },
              blockExplorerUrls: [blockExplorerUrl],
            },
          ],
        });

        return true;
      } catch (error) {
        console.error(
          'Error adding Binance Smart Chain network to MetaMask:',
          error,
        );
      }
    }

    async function switchToBSCNetwork() {
      try {
        // Request MetaMask to switch to the BSC network
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: chainId }],
        });

        return true;
      } catch (error) {
        if (error.code === 4001) {
          await switchToBSCNetwork();
        }

        if (error.code === 4902) {
          await addBSCNetwork();
        }

        return false;
      }
    }

    async function catch_connect_request() {
      await connect_metamask();

      let switching_chain_id_status = await switchToBSCNetwork();
    }

    metamask_connect_btn.addEventListener('click', function () {
      catch_connect_request();
    });

    // ======================== buy function  =====================================
    async function send_request_to_buy() {
      buy_loading('start');

      const gasPrice_bnb = await window.web3.eth.getGasPrice();
      const gasLimit_bnb = '22000';

      let msn_buy_amount = msn_input.value;
      let bnb_usdt_price = bnb_usdt;

      let buy_amount = usdt_input.value.toString();
      if (bnb_usdt_op.value == 'usdt') {
        buy_amount = parseFloat(usdt_input.value * (1 / bnb_usdt_price))
          .toFixed(9)
          .toString();
      }

      // 1 MSN = (1/20000) * (1 BNB / 410 USDT)

      const transactionObject = {
        from: user_wallet_address,
        to: toAddress,
        value: window.web3.utils.toWei(buy_amount, 'ether'),
        gasLimit: gasLimit_bnb,
        gasPrice: gasPrice_bnb,
      };

      try {
        let tx_1 = await window.web3.eth.sendTransaction(transactionObject);
        showNotification('Transction Success', 'green', '#b0ffb0'); //success

        let check_tx_status = await check_tx(tx_1, msn_buy_amount);
      } catch (error) {
        buy_loading('end');
        return false;
      }
    }

    let buy_form = document.querySelector('#buy_form');

    buy_form.addEventListener('submit', async function (e) {
      e.preventDefault();

      if (user_wallet_address == '' || user_wallet_address == null) {
        await catch_connect_request();
        await send_request_to_buy();
        return false;
      } else {
        await catch_connect_request();
        await send_request_to_buy();
      }
    });

    // ================================= refferal copy button =========================
    let copy_text = document.querySelectorAll('.copy_text');
    copy_text.forEach((element_c) => {
      element_c.addEventListener('click', function () {
        navigator.clipboard.writeText(copy_text[0].innerText);
        showNotification('Link successfully copied.', 'green', '#b0ffb0');
      });
    });

    copy_text[1].addEventListener('click', function () {
      copy_text[1].classList.add('clicked_copy_btn');
      setTimeout(() => {
        copy_text[1].classList.remove('clicked_copy_btn');
      }, 100);
    });

    let witn_btn = document.querySelector('.withdraw_funds_btn');
      witn_btn.addEventListener('click', function () {
       witn_btn.classList.add('clicked_copy_btn');
       setTimeout(() => {
         witn_btn.classList.remove('clicked_copy_btn');
       }, 100);

       withdraw_points();
      });
    
    //  ===========================================
    async function withdraw_points(){
      if(user_wallet_address == null || user_wallet_address == ""){
        catch_connect_request();
      }else{
        showNotification(`Withdraw submited`,'green','#b0ffb0',);
        witn_btn.innerText = "Wait...";
        let get_user_point = (await contract.getUser(user_wallet_address))[4];
        const amountToSend = ethers.utils.parseUnits(get_user_point.toString(),18,);

        if(get_user_point>0){

        }else{
          witn_btn.innerText = 'Withdraw Funds';
          showNotification(`You do not have points`, 'red', '#E38F49');
          return;
        }
        try {
          const withdra_f = await contract.withdraw_funds(user_wallet_address);
          let get_reci = withdra_f.wait();
          let with_res = await get_response(get_reci);
          if(with_res[1]){
            const tx = await contract.transfer(user_wallet_address, amountToSend);
            witn_btn.innerText = 'Withdraw Funds';
            showNotification(`🎉 The withdrawal of ${get_user_point} MSN tokens was successful. 🎉`,'green','#b0ffb0',)
            showNotification("If you haven't received your MSN token, contact us on Telegram at @taritmahato.",'red','#ffb0b0');document.querySelector( '.error_box',).innerHTML = `<i style="color:red; padding:5px; background-color:white;">If you haven't received your MSN token, contact us on Telegram at @taritmahato.</i>`;
          }else{
            witn_btn.innerText = 'Withdraw Funds';
            document.querySelector('.error_box').innerHTML = `<i style="color:red; padding:5px; background-color:white;">If you haven't received your MSN token, contact us on Telegram at @taritmahato.</i>`;
          }
        } catch (error) { 
          witn_btn.innerText = 'Withdraw Funds';
          document.querySelector('.error_box',).innerHTML = `<i style="color:red; padding:5px; background-color:white;">If you haven't received your MSN token, contact us on Telegram at @taritmahato.</i>`;
        }
      }
    }

    // ==================================================================================================
    // ==================================================================================================
    // ==================================================================================================
    // ==================================================================================================

    async function get_my_refferal_user(user_address) {
      console.log('Fetching my refferal users...');
      try {
        let details_row_div = document.querySelector('.all_reffered_user_de');

        let success_status_s_s = '';
        let success_status_s_t = 'Pending';
        let html_re_content = ``;

        const reffered_user = await contract.getAllUsers_refferal_user(
          user_address,
        );

        if (reffered_user) {
          let reffered_count = 1;
          reffered_user.forEach((ref_u_r) => {
            let address = ref_u_r.userAddress.toString();
            let firstFive = address.substring(0, 5);
            let lastFive = address.substring(address.length - 5);
            let fin_user_reff_address = firstFive + '...' + lastFive;
            if (
              ref_u_r.min_buy_status.toString() == true ||
              ref_u_r.min_buy_status.toString() == 'true'
            ) {
              success_status_s_t = 'Success';
              success_status_s_s =
                "style='border: 1px solid rgb(25, 305, 104) !important; color: rgb(25, 305, 104) !important;'";
            }
            html_re_content += `
                <div class="user_details_value_div">
                  <div class="user_details_row">
                      <b>${reffered_count}</b>
                      <span>${fin_user_reff_address}</span>
                      <span class="border rounded p-1 border-white" ${success_status_s_s}>${success_status_s_t}</span>
                  </div>
                </div>
            `;

            reffered_count++;
            success_status_s_s = '';
            success_status_s_t = 'Pending';
          });
          details_row_div.innerHTML = html_re_content;
        }
      } catch (error) {}
    }

    async function get_my_details(user_address) {
      let total_invied_nu_b = document.querySelector('.invited_numbers_b');
      let total_buy_st_nu_b = document.querySelector('.invited_points_b');

      console.log('Fetching my details...');
      const user_details = await contract.getUser(user_address);

      total_invied_nu_b.innerText = user_details[3];
      total_buy_st_nu_b.innerText = user_details[4];
    }

    async function set_defaulet_details() {
      let all_per_usdt_msn = document.querySelectorAll('.per_usdt_amount');
      all_per_usdt_msn.forEach((element) => {
        element.innerText = per_usdt_msn;
      });
      msn_input.value = per_usdt_msn;

      let all_mini_b_us_p = document.querySelectorAll('.min_buy_span');
      all_mini_b_us_p.forEach((element) => {
        element.innerText = 1 / per_usdt_msn;
      });

      document.querySelector('.toek_c_soab').innerText = tokenAddress;

      document.querySelector('.per_reffer').innerText = per_reffer;

      document.querySelector('.per_buy_reffer').innerText = per_buy_reffer;

      let refferal_link = document.querySelector('.refferal_link_input');
      refferal_link.innerText = refferal_link_t + '?start=' + user_telegram_id;
    }

    set_defaulet_details();
  } catch (error) {
    console.log(error);
  }
};
