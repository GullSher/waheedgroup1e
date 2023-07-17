import React from 'react';
// import { ResponsiveEmbed } from 'react-responsive-embed';

const Fbvideo = () => {
    return (
        <div>


            {/* 
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FFaujiSupreme%2Fvideos%2F836582844166428%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe> */}

            <div className='aa' style={{ height: "700px", padding: "0", margin: "0", }}>
                <iframe
                    src="https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2FPVMAOFFICIAL%2Fvideos%2F456941835324774%2F&show_text=false&width=560&t=0"
                    title="Facebook Video"
                    // width="100%"
                    width={'100%'}
                    // height="auto"
                    // height={'full'}
                    // height={'600px'}
                    height={'100%'}
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen={true}>

                </iframe>
            </div>
            {/*             
            <ResponsiveEmbed
                src="https://www.facebook.com/video/embed?video_id=YOUR_VIDEO_ID"
                allowFullScreen
                ratio="16/9" // or "4/3" for a different aspect ratio
            /> */}


        </div >
    );
};

export default Fbvideo;
