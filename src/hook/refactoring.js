import React from 'react'
import Header from '../hook/Header'
import NewsApi from '../hook/api'

function refactoring() {
  return (
    <>
      <Header title='News Terkini'>
        <NewsApi />
      </Header>
    </>
  )
}

export default refactoring