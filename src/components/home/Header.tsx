import React from 'react';
import { Link } from 'react-router-dom';
import bgVideo from '../../assets/video/A32NX.mp4';
import { Button } from '../Button';

type HeaderProps = {
    scrollToDownload: () => void
};

export const Header: React.FC<HeaderProps> = (props) => (
    <header className="h-screen">
        <div className="absolute max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 inset-x-2 inset-y-1/3 z-30 ">
            <h1 className="text-7xl sm:text-8xl font-medium pb-3">
                <span className="text-blue-light">A32</span><span className="text-blue">N</span>X
            </h1>
            <p className="text-lg max-w-lg">A community built and maintained project aiming to provide high quality and detailed aircraft for Microsoft Flight Simulator.
            </p>
            <div className="flex max-w-md py-5">

                <Button onClick={props.scrollToDownload}
                    className="w-40 text-xl font-bold bg-blue-light border-2 border-blue-light transition hover:bg-white hover:text-blue-light mr-3">Download</Button>


                <Link to='/projects'>
                    <Button
                        className="w-44 text-xl font-bold border-2 border-blue-light text-blue-light transition hover:bg-white hover:text-blue-light">Learn More</Button>
                </Link>
            </div>
        </div>

        <video className="absolute top-0 h-screen object-cover w-screen opacity-10"
            src={bgVideo} playsInline autoPlay
            muted loop />
    </header>
);
