const { ethers } = require('ethers');
//const ETHWrapper = require('../build/ETHWrapper.json');
const ETHWrapper = require('../artifacts/contracts/WETHwrapper.sol/ETHWrapper.json');
const WETH = require('../artifacts/contracts/WETH.sol/WETH.json')


const run = async function() {

    const providerURL= "http://127.0.0.1:8545/";
    const walletPrivateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
    const wrapperContractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const WETHContractAddress = "0xa16E02E87b7454126E5E10d957A927A7F5B5d2be";
    const provider = new ethers.providers.JsonRpcProvider(providerURL);
    const wallet = new ethers.Wallet(walletPrivateKey, provider);

    const wrapValue = ethers.utils.parseEther("1")

    const wrapperContract = new ethers.Contract(wrapperContractAddress, ETHWrapper.abi, wallet);
    const tokenContract = new ethers.Contract(WETHContractAddress, WETH.abi, wallet);

	const approveTx = await tokenContract.approve(wrapperContractAddress, wrapValue)
	await approveTx.wait()

	const unwrapTx = await wrapperContract.unwrap(wrapValue)
	await unwrapTx.wait()

	balance = await tokenContract.balanceOf(wallet.address)
	console.log("Balance after unwrapping:", balance.toString())

	contractETHBalance = await provider.getBalance(wrapperContractAddress);
	console.log("Contract ETH balance after unwrapping:", contractETHBalance.toString())

 
   

    
}
run()