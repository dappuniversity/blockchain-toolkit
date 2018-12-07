const MyContract = artifacts.require('./MyContract.sol')

contract('MyContract', (accounts) => {
  it('initializes with the correct value', async () => {
    const myContract = await MyContract.deployed()
    const value = await myContract.get()
    assert.equal(value, 'myValue')
  })

  it('can update the value', async () => {
    const myContract = await MyContract.deployed()
    myContract.set('New Value')
    const value = await myContract.get()
    assert.equal(value, 'New Value')
  })
})
