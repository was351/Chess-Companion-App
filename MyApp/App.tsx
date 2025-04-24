import { createTamagui } from '@tamagui/core'
import { TamaguiProvider } from 'tamagui'
import { defaultConfig } from '@tamagui/config/v4'
import { Button } from 'tamagui'

// you usually export this from a tamagui.config.ts file
const config = createTamagui(defaultConfig)

type Conf = typeof config

// make imports typed
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

export default function Demo() {
  return (
    <TamaguiProvider config={config}>
      <Button theme="blue">Hello world</Button>
    </TamaguiProvider>
  )
}