import Head from 'next/head'
import Axios from 'axios'
import { Header, Banner, ExploreCard, LargeCard, LiveCard, Footer } from '../components'

const Home = ({ exploreData, liveAnywhereData }) => {
  console.log(exploreData);

  return (
    <div className="">
      <Head>
        <title>Doswin Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>

        <section className='pt-16'>
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4">
            {
              exploreData?.map(({img, location, distance}) => (
                <ExploreCard 
                  key={location} 
                  image={img} 
                  location={location} 
                  distance={distance} 
                />
              ))
            }
          </div>
        </section>

        <section className='pt-16'>
          <h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
          <div className="flex overflow-scroll my-4 gap-6 scrollbar-hide p-3">
            {
              liveAnywhereData?.map(({img, title}) => (
                <LiveCard 
                  key={img} 
                  image={img} 
                  title={title} 
                />
              ))
            }
          </div>
        </section>

        <LargeCard 
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb'
          buttonText='Get Inspired'
        />
      </main>

      <Footer />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const { data:exploreData } = await Axios.get('https://www.jsonkeeper.com/b/4G1G')


  const liveAnywhereData = await fetch('https://www.jsonkeeper.com/b/VHHT').
  then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
      liveAnywhereData
    }
  }
}
