import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

  <main>
    <Header title="Welcome to my app!" />
    <p className="description">

      Get started by editing <code>pages/index.js</code>

   <p className="description">   
    <strong>Emmanuel Yee Hong Wei</strong> </p>



    <p className="description">


        TechnoBear is a website dedicated to showcasing the work of TechnoBear. You can find his latest projects, news and updates here. 

    </p>
    <p className="social-links">       
    <a href="https://www.facebook.com/example">Facebook</a> | <a href="https://twitter.com/example">Twitter</a> | <a href="https://www.instagram.com/example">Instagram
    </a>     
    </p>   



  </main>

  <Footer />
</div>
)
}



      <Footer />
    </div>
  )
}
