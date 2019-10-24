import React from 'react'
import TransportU2F from "@ledgerhq/hw-transport-u2f"
import Iota from 'hw-app-iota'

class LedgerTrampoline extends React.Component {

  constructor() {
    super()
    this.registerEventListener = this.registerEventListener.bind(this)
    this.initLedger = this.initLedger.bind(this)
    this.sendMessageToExtension = this.sendMessageToExtension.bind(this)
    this.registerEventListener()
  }

  registerEventListener() {
    window.addEventListener('message', e => {
      if (e && e.data && e.data.target === 'ledger-iframe') {
        console.log(e)
        const action = e.data.action
        const params = e.data.params

        const replyAction = action + '-reply'
        switch (action) {
          case 'ledger-init': 
            this.initLedger(replyAction)
            break
          default:
            this.sendMessageToExtension({
              action: replyAction,
              success: false,
              payload: null
            })
        }
      }
    }, false)
  }

  async initLedger(replyAction){
    try {
      const transport = await TransportU2F.create()
      this.iota = new Iota(transport)
      this.sendMessageToExtension({
        action: replyAction,
        success: true,
        payload: null
      })
    } catch (e) {
      this.sendMessageToExtension({
        action: replyAction,
        success: false,
        payload: e.message
      })
    }
  }

  sendMessageToExtension(msg) {
    window.parent.postMessage(msg, '*')
  }

  render() {
    return null
  }
}

export default LedgerTrampoline