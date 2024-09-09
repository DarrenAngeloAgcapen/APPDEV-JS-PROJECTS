import Header from './Header.jsx'
import Body from './Profile.jsx'
import Footer from './Footer.jsx'

export default function App(){
  return(
    <>
    <Header />
    <Body name = "Angelo" hobby="Browsing the Internet" food="Lasagna" course="BSIT" isCourseRelevant={true} age = {24} />
    
    <Footer />
    </>
  )
}

