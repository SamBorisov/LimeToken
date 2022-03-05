const hre = require("hardhat");
const ethers = hre.ethers;


// const run = async function() {

//     await hre.run('compile'); // We are compiling the contracts using subtask
//     const [deployer] = await ethers.getSigners(); // We are getting the deployer

//     console.log('Deploying contracts with the account:', deployer.address); // We are printing the address of the deployer
//     console.log('Account balance:', (await deployer.getBalance()).toString()); // We are printing the account balance
  
//     const ETHWrapper = await ethers.getContractFactory("ETHWrapper"); 
//     const ethWrapperContract = await ETHWrapper.deploy();
//     console.log('Waiting for ETHWrapper deployment...');
//     await ethWrapperContract.deployed();

//     console.log('ETHWrapper Contract address: ', ethWrapperContract.address);
//     console.log('Done!');
// }
// run()

async function deployWETH() {
  
  
    await hre.run('compile'); // We are compiling the contracts using subtask
    
    const [deployer] = await ethers.getSigners(); // We are getting the deployer
  
    console.log('Deploying contracts with the account:', deployer.address); // We are printing the address of the deployer
    console.log('Account balance:', (await deployer.getBalance()).toString()); // We are printing the account balance

    const ETHWrapper = await ethers.getContractFactory("ETHWrapper"); // 
    const ethWrapperContract = await ETHWrapper.deploy();
    console.log('Waiting for ethWrapperContract deployment...');
    await ethWrapperContract.deployed();

    console.log('ethWrapper Contract address: ', ethWrapperContract.address);
    console.log('Done!');
}
  
module.exports = deployWETH;