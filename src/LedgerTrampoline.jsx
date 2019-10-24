import React from 'react'
import TransportU2F from "@ledgerhq/hw-transport-u2f"
import Iota from 'hw-app-iota'

class LedgerTrampoline extends React.Component {

  constructor() {
    super()
    this.registerEventListener = this.registerEventListener.bind()
    this.initLedger = this.initLedger.bind()
    this.sendMessageToExtension = this.sendMessageToExtension.bind()
    this.registerEventListener()
  }

  registerEventListener() {
    const _this = this
    console.log("register")
    window.addEventListener('message', function (e) {
      if (e && e.data && e.data.target === 'ledger-iframe') {
        console.log(e)
        const action = e.data.action
        const params = e.data.params

        const replyAction = action + '-reply'
        switch (action) {
          case 'ledger-init': 
            _this.initLedger(replyAction)
            break
          /*case 'ledger-unlock':
            _this.unlock(replyAction, params.hdPath)
            break*/
          default:
            _this.sendMessageToExtension({
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