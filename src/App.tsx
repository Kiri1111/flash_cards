import { Button } from '@/ui/button'
import { Header } from '@/ui/header'

export function App() {
  return (
    <div>
      <Header />
      <Button as={'button'}>{'ddd'}</Button>
      <Button as={'a'}>{'dddssdd'}</Button>
    </div>
  )
}
