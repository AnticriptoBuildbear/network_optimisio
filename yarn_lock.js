 const { Defender } = require('@openzeppelin/defender-sdk'); "0272a0bd-a723-490a-84c0-70d9e8418734"


// Entrypoint for the action
exports.handler = async function(event) {
  const client = new Defender(credentials);
  // Use client.relaySigner for sending txs
}

// To run locally (this code will not be executed in actions)
if (require.main === module) {
  const { RELAYER_API_KEY: "9V42UkfP74drpP8rQHs3ij9TDxMLFrQx", RELAYER_API_SECRET: "5yazE3Ywg6faG8hJ2miDn9iRxYxRMfhPHh5RspzX9spD9sqbyRq3BR2PEXnq89oC" } = process.env;
  exports.handler({ apiKey, apiSecret })
    .then(() => process.exit(0))
    .catch(error => { console.error(error); process.exit(1); }); false
}
