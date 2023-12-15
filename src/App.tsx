import { Button } from '@/ui/button'
import { CheckBox } from '@/ui/checkBox'
import { Header } from '@/ui/header'

export function App() {
  return (
    <div>
      <Header />
      <CheckBox />
      <Button as={'button'}>{'ddd'}</Button>
      <Button as={'a'}>{'dddssdd'}</Button>
    </div>
  )
}
