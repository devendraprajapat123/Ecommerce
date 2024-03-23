import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollections } from '../Components/NewCollections/NewCollections'
import { NewLetter } from '../Components/NewsLetter/NewLetter'
import { Container } from 'react-bootstrap'

export const Shop = () => {
  return (
    <Container>
    

        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewLetter/>
    
    </Container>
  )
}
