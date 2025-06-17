import React, { useEffect, useState } from 'react'
import MainSwiper from './MainSwiper'
import MostViewed from './MostViewed'
import MostSearched from './MostSearched'
import LibraffsChoices from './LibraffsChoices'
import UcAlma from './UcAlma'
import { getMostSearchedBooks, getThisWeeksMostViewedBooks } from '../../services/api'

function Main() {

    const [mostViewed, setMostViewed] = useState()
    const [mostSearched, setMostSearched] = useState()

    useEffect(()=>{
        getThisWeeksMostViewedBooks().then(products => setMostViewed(products))
        getMostSearchedBooks().then(products => setMostSearched(products))
    }, [])

    return (
        <div>
            <div className='xl:pt-0 pt-5'>
                <MainSwiper />
            </div> 
            <div>
                <MostViewed data={mostViewed} />
            </div>
            <div>
                <MostSearched data={mostSearched} />
            </div>
            <div>
                <LibraffsChoices/>
            </div>
            <div>
                <UcAlma/>
            </div>

        </div>
    )
}

export default Main