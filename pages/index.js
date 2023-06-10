import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Emmanuel Yee </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main>
    <Header title="Emmanuel Yee Hong Wei" />

    <p className="description">

      Welcome to my Site!

    </p>

    <p className="description">


        TechnoBear is a website dedicated to showcasing the work of TechnoBear. You can find his latest projects, news and updates here. 

    </p>
    
    <header className="social">   
    <div>     
    <a href="https://bento.me/emmanuelyee" className="social-bento.me">My Bento</a>     
    </div> 
    </header>
    
    <header className="social">   
    <div>
    <a href="https://read.cv/emmanuelyee" className="social-read.cv">Resume</a>     
    </div> 
    </header>
    
    <header className="social">   
    <div>
    <a href="https://www.instagram.com/yourusername" className="social-instagram">Instagram</a>   
    </div> 
    </header>



  </main>




      <Footer />
    </div>
  )
}
