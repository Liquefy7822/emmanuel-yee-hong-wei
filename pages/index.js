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

    </p>
    <p className="description">

      welcome to my app!

    </p>

    <p className="description">


        TechnoBear is a website dedicated to showcasing the work of TechnoBear. You can find his latest projects, news and updates here. 

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
