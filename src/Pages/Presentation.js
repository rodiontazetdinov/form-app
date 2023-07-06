import { Outlet } from 'react-router-dom';

import Insight from './Insight'
import NameConcept from './NameConcept'
import Visual from './Visual'

const Presentation = () => {
    console.log('presentation')
    return(
        <>
        <Visual/>
        <Outlet/>
        </>
    )
}

export default Presentation;