import React from 'react';
// import { ResponsiveEmbed } from 'react-responsive-embed';

const Fbvideo = () => {
    return (
        <div>


            {/* 
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FFaujiSupreme%2Fvideos%2F836582844166428%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe> */}
            {/* ========Working with fixed height============ */}

            {/* <div className='aa' style={{ height: "700px", padding: "0", margin: "0", minHeight: "100px", maxHeight: "700px" }}> */}
            {/* <div className='aa' style={{ height: "700px", padding: "0", margin: "0", }}> */}
            {/* <div className="container" style={{ height: "700px", padding: "0", margin: "0", alignContent: "center", minHeight: "auto", maxHeight: "auto" }}> */}
            {/* <iframe
                    src="https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2FPVMAOFFICIAL%2Fvideos%2F456941835324774%2F&show_text=false&width=560&t=0"
                    title="Facebook Video"
                    width={'100%'}
                    height={'100%'}
                    style={{ border: 'none', overflow: 'hidden', allowFullScreen: "true" }}
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen={true}>

                </iframe>
            </div>
            */}
            {/* ========Working with fixed height============ */}
            {/* <div>
                <br /><br />
            </div> */}

            {/* ====================== */}
            <div className='ab'

                style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    padding: "0",
                    top: "56.25%",
                    height: "700px"


                    // padding- top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */

                }}>

                {/* <div className='aa' style={{ height: "700px", padding: "0", margin: "0", }}> */}
                {/* <div className="container" style={{ height: "700px", padding: "0", margin: "0", alignContent: "center", minHeight: "auto", maxHeight: "auto" }}> */}

                <iframe
                    src="https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2FPVMAOFFICIAL%2Fvideos%2F456941835324774%2F&show_text=false&width=560&t=0"
                    title="Facebook Video"

                    style={{
                        position: "absolute", top: "0", left: "0", bottom: "0", right: "0", width: "100%",
                        height: "100%"

                    }}
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                // allowFullScreen={true}
                >

                </iframe>
            </div>

            {/* ======================= */}

        </div >
    );
};

export default Fbvideo;
