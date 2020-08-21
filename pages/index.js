import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Header from '../src/components/Header'
import LeftNav from '../src/components/LeftNav'
import Tiles from '../src/components/Tiles'
import '../styles/index.scss'
import { request } from '../src/utils'

Home.getInitialProps = async ctx => {
  const res = await request()
  return { data: res }
}

export default function Home({ data }) {
  const [state, setState] = useState(data)

  const [selectedFilters, setSelectedFilters] = useState({
    land_success: '',
    launch_success: '',
    launch_year: '',
    limit: 100,
  })

  const filterHandler = e => {
    let value = e.target.value
    if (selectedFilters[e.target.name] == e.target.value) {
      value = ''
    }

    setSelectedFilters({
      ...selectedFilters,
      [e.target.name]: value,
    })
  }

  useEffect(() => {
    setState(data)
  }, [])

  useEffect(() => {
    let query = Object.keys(selectedFilters)
      .map(
        k =>
          encodeURIComponent(k) + '=' + encodeURIComponent(selectedFilters[k])
      )
      .join('&')
    const url = `https://api.spaceXdata.com/v3/launches?${query}`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setState(data)
      })
  }, [selectedFilters])

  if (!state) {
    return 'Loading'
  }
  return (
    <div className="container">
      <Head>
        <title>SpaceX Launch Programs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="container fluid home">
          <div className="row">
            <div className="col-md-2 col-sm-3 filters">
              <LeftNav
                selectedFilters={selectedFilters}
                data={state}
                filterHandler={filterHandler}
              />
            </div>
            <div className="col-md-10 col-sm-9 tiles">
              <Tiles data={state} />
            </div>	
          </div>
        </div>
      </main>
    </div>
  )
}
