# :rocket: pegasus-ledger-trampoline

Since it is not possible to access Ledger Nano S from a Google Chrome extension, i implemented a workaround: injecting an iframe to the background page of the extension, (which is hosted [here](https://allemanfredi.github.io/pegasus-ledger-trampoline) and the code is in this repo into __`gh-pages`__ branch). In order to work correctly, the iframe must run under https (since U2F requires SSL). Moreover, the comunication between the backgrund page and the iframe is made by __`postMessage`__.


## :exclamation: Pay Attention: this repo is still work in progress!