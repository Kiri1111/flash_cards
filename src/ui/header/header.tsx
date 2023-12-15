import iconHeader from '@/assets/icons/logoHeader.png'
import { Button } from '@/ui/button'

import s from './header.module.scss'
export const Header = () => {
  return (
    <div className={s.header}>
      <img alt={'icon'} className={s.icon} src={iconHeader} />
      <Button>{1111}</Button>
    </div>
  )
}
