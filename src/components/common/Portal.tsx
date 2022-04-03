import ReactDOM from 'react-dom'

type Props = {
  children: React.ReactNode
  selector: string
}

function Portal({ children, selector }: Props) {
  const element =
    typeof window !== 'undefined' && document.querySelector(selector)
  return element && children ? ReactDOM.createPortal(children, element) : null
}

export default Portal
