import { ReactNode } from "react"
import styles from './styles.module.scss'

type ContainerProps = {
  children: ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return <div className={`${styles.container}`}>{children}</div>
}

export default Container