import Image from 'next/image'
import Link from 'next/link'

import LogoDark from './logo-dark.png'
import LogoLight from './logo-light.png'
import $styles from './logo.module.css'

export const HeaderLogo = () => {
  const themeColor = useThemeColor()
  const logo = useMemo(() => (themeColor === 'dark' ? LogoDark : LogoLight), [themeColor])

  return (
    <Link href="/" className={$styles.link}>
      <Image
        src={logo}
        alt="avatar logo"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      ></Image>
    </Link>
  )
}
