import Link from 'next/link'
import * as style from "../styles/index.module.css"

const Index = () => {
  return (
    <>
      <h1 className={style.h1Text}>こんにちは</h1>
      <Link href="/blog"><a>ブログページへ移動</a></Link>
    </>
  )
}

export default Index