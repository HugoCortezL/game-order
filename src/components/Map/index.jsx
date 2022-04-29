import {MapContainer, HorizontalMapDivisor, VerticalMapDivisor} from './styles'
import NumberCard from '../NumberCard'
import {useEffect} from 'react'

export default function Map({numbers}){
    return(
        <MapContainer>
            <HorizontalMapDivisor top='33%'/>
            <HorizontalMapDivisor top='66%'/>
            <VerticalMapDivisor left='33%'/>
            <VerticalMapDivisor left='66%'/>
            {
                numbers.map(number => <NumberCard key={number} number={number}/>)
            }
        </MapContainer>
    )
}