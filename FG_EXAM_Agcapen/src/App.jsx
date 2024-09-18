import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'


export default function App(){
  return(
    <>
    <Header />
    <Body model = "KB-X1000" layout="Full-size (104 keys)" BL = "RGB with customizable colors" conn = "Wired (USB 2.0)" dim = "440 mm x 135 mm x 35 mm" weight = "1.2 kg" cLength = "1.8 meters" aFeature = "Anti-ghosting, N-key rollover, dedicated media controls" />
    <Footer />
    </>
  )
}
