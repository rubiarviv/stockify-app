// Name: Rubi Arviv
// ID: 033906132 

import { initialize, Endpoint } from '@muzilator/sdk'

const init = async () => {
  const platform = await initialize()
  await platform.loadLibrary('stockify-nalyzer', 'analyzer','secondary')
  await platform.loadLibrary('stockify-controller', 'controller', 'primary')
  await platform.loadLibrary('midi-synth', 'synth', 'secondary')

  await platform.connectChannels(Endpoint('controller', 'stock'), Endpoint('analyzer', 'stock'))
  await platform.connectChannels(Endpoint('analyzer', 'midi'), Endpoint('synth', 'midi'))
}

init()
