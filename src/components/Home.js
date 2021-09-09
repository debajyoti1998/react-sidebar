import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import {SliderData} from '../data/homes'

const Container=styled.div`
height:100vh;
`;

function Home() {
    return (
        <div>
            <Container>
                {SliderData && SliderData.map( (v,index )=>
                    <Section key={index} backgroundImage={v.image}
                    title={v.title}
                    description={v.description}/>
                )}
            </Container>
        </div>
    )
}

export default Home
