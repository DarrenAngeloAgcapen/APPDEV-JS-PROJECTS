import Header from './Header.jsx'
import Body from './Body.jsx'
import Footer from './Footer.jsx'



export default function App(){
  return(
    <>
    <Header />
    <Body name = "Angelo" food="Pizza" isHealthy={false} age = {22} />
    <Body />
    <Footer />
    </>
  )
}
