var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin).then(async () => {
    const instance = await MetaCoin.deployed();
    console.log('Expecting to fail');
    await instance.useArray(['0', '1', '2']);
    console.log('Actually, it worked');
  });
};
