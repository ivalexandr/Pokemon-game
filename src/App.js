import React from 'react'
import Header from './Components/Header/Header'
import Layout from './Components/Layout/Layout'
import Footer from './Components/Footer/Footer'
import img from './bg1.jpg'

function App() {
  return (
    <>
      <Header
        title='This is title'
        descr='This is description'
      />
      <Layout
        id='roots'
        title = 'this is title in Layout'
        descr = 'this is descr in Layout'
        urlBg = {img}
      />
      <Layout
        id='about'
        title = 'this is title in Layout'
        descr = 'this is descr in Layout'
        colorBg = '#e6e6e6'
      />
      <Layout
        id='contacts'
        title = 'this is title in Layout'
        descr = 'this is descr in Layout'
        urlBg = {img}
      />
      <Footer />
    </>
  );
}

export default App
