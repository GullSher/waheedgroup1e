import React, { Component } from 'react';

import Fbvideo from '../Components/Fbvideo';
import Owlcarouseluper from './Owlcarouseluper';
import Waheedgrouphome from './Waheedgrouphome';
import OurConcerns from './OurConcerns';
import Ourbussiness from './OurBussiness';


class Home extends Component {
    render() {
        return (
            <>

                <Fbvideo />
                <Owlcarouseluper />
                <Waheedgrouphome />
                <OurConcerns />
                <Ourbussiness />


            </>

        )
    }
}
export default Home
