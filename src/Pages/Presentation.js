import { Outlet } from 'react-router-dom';

import Insight from './Insight'
import NameConcept from './NameConcept'
import Visual from './Visual'
import DownloadPresentation from '../Components/DownloadPresentation';

const Presentation = () => {
    console.log('presentation')
    return(
        <>
        <Visual/>
        <DownloadPresentation/>
        </>
    )
}

export default Presentation;