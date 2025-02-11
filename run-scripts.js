run-script script_name flags='' sig='' args='':
  sh -c 'FOUNDRY_PROFILE=ci forge script script/{{script_name}}.s.sol {{sig}} {{args}}     --rpc-url "https://rpc.buildbear.io/esquivelfabian"     --private-key "0xb814308ee6eec33293216a391841cb80c864fe475bbc4992fe7f045ed12962c8"     --etherscan-api-key "verifyContract"     --verifier-url "https://rpc.buildbear.io/verify/etherscan/missing-hela-e7fd69ed"     -vvvv {{flags}}' 

deploy-verify:
  sh -c 'just run-script <SCRIPT_NAME> "--broadcast --verify --slow"'
