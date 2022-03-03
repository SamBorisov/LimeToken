const hre = require("hardhat");
const ethers = hre.ethers;


const run = async function() {
    const ETHWrapper = await ethers.getContractFactory("ETHWrapper"); 
    const ethWrapperContract = await ETHWrapper.deploy();
    console.log('Waiting for ETHWrapper deployment...');
    await ethWrapperContract.deployed();

    console.log('ETHWrapper Contract address: ', ethWrapperContract.address);
    console.log('Done!');
}
run()