import { useEffect } from 'react';
import './mainPage.css'
import VideoDataService from '../executors/VideoDataService.js';

const MainPage = () => {

    return (
        <div>
            <Logo />
            <Containers />
        </div>
    );
}

const Logo = () => {
    return (
        <div className="logo">
            <img src={VideoDataService.getLogoSrc()}></img>
            <div className='titleAndPlayBtnContainer'>
                <div className='title'>MAss Effect</div>
                <button className='logoPlayBtn'>Play</button>
            </div>
        </div>
    );
}

const Containers = () => {
    var miniatures = VideoDataService.getMiniaturesSrc()
        .map(src => <VideoMiniature imageSrc={src} />);
    return (
        <div className='containers'>
            <VideoMiniaturesContainer title='favs' miniatures={miniatures} />
            <VideoMiniaturesContainer title='recomended' miniatures={miniatures} />
        </div>
    );
}

const VideoMiniaturesContainer = ({ title, miniatures }) => {
    return (
        <div className='allMiniaturesContainer'>
            <div className='containerTitle'>{title}</div>
            <div className='miniaturesContainer'>
                <div className='miniaturesInnerContainer'>
                    {miniatures}
                </div>
            </div>
        </div>
    );
}

const VideoMiniature = ({ imageSrc }) => {
    return (
        <div className='singleMiniatureContainer'>
            <div className='playBtn'></div>
            <img src={imageSrc} alt="" />
        </div>
    );
}

export default MainPage;