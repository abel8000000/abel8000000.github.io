import React, { useState, useRef, useEffect } from 'react';
import { Button, Frame, Input } from '@react95/core';
import '../styles/blog-window.css';

import BlogBackIconGray from '../assets/blog-window-icons/blog-back-icon-gray.png';
import BlogBackIconColor from '../assets/blog-window-icons/blog-back-icon-color.png';
import BlogForwardIconGray from '../assets/blog-window-icons/blog-forward-icon-gray.png';
import BlogForwardIconColor from '../assets/blog-window-icons/blog-forward-icon-color.png';
import BlogStopIconGray from '../assets/blog-window-icons/blog-stop-icon-gray.png';
import BlogStopIconColor from '../assets/blog-window-icons/blog-stop-icon-color.png';
import BlogRefreshIconGray from '../assets/blog-window-icons/blog-refresh-icon-gray.png';
import BlogRefreshIconColor from '../assets/blog-window-icons/blog-refresh-icon-color.png';
import BlogHomeIconGray from '../assets/blog-window-icons/blog-home-icon-gray.png';
import BlogHomeIconColor from '../assets/blog-window-icons/blog-home-icon-color.png';
import BlogSearchIconGray from '../assets/blog-window-icons/blog-search-icon-gray.png';
import BlogSearchIconColor from '../assets/blog-window-icons/blog-search-icon-color.png';
import BlogFavoritesIconGray from '../assets/blog-window-icons/blog-favorites-icon-gray.png';
import BlogFavoritesIconColor from '../assets/blog-window-icons/blog-favorites-icon-color.png';
import BlogHistoryIconGray from '../assets/blog-window-icons/blog-history-icon-gray.png';
import BlogHistoryIconColor from '../assets/blog-window-icons/blog-history-icon-color.png';
import BlogMailIconGray from '../assets/blog-window-icons/blog-mail-icon-gray.png';
import BlogMailIconColor from '../assets/blog-window-icons/blog-mail-icon-color.png';
import BlogPrintIconGray from '../assets/blog-window-icons/blog-print-icon-gray.png';
import BlogPrintIconColor from '../assets/blog-window-icons/blog-print-icon-color.png';

const BlogWindow = () => {
    const [hoveredButton, setHoveredButton] = useState(null);
    const [iframeKey, setIframeKey] = useState(0);
    const [iframeSrc, setIframeSrc] = useState("https://abel8000000.github.io/blog/");
    const [address, setAddress] = useState(iframeSrc);
    const [favicon, setFavicon] = useState(null);
    const iframeRef = useRef(null);

    const handleMouseEnter = (buttonName) => {
        setHoveredButton(buttonName);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    const refreshIframe = () => {
        if (iframeSrc === "about:blank") {
            setIframeSrc("https://abel8000000.github.io/blog/");
        } else {
            setIframeKey(prevKey => prevKey + 1);
        }
    };

    const stopIframe = () => {
        setIframeSrc("about:blank");
    };

    const homeIframe = () => {
        setIframeSrc("https://abel8000000.github.io/blog/");
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleAddressSubmit = (e) => {
        e.preventDefault();
        let url = address;
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
        setIframeSrc(url);
    };

    useEffect(() => {
        const extractDomain = (url) => {
            const a = document.createElement('a');
            a.href = url;
            return a.hostname;
        };

        const fetchFavicon = async (url) => {
            const domain = extractDomain(url);
            const faviconUrl = `https://${domain}/favicon.ico`;
            try {
                const response = await fetch(faviconUrl);
                if (response.ok) {
                    setFavicon(faviconUrl);
                } else {
                    setFavicon(null);
                }
            } catch (error) {
                setFavicon(null);
            }
        };

        fetchFavicon(iframeSrc);
    }, [iframeSrc]);

    const handleIframeLoad = () => {
        const iframe = iframeRef.current;
        try {
            const iframeLocation = iframe.contentWindow.location.href;
            setAddress(iframeLocation);
        } catch (error) {
            // Fallback for cross-origin iframes
            setAddress(iframe.src);
        }
    };

    return (
        <>
            <Frame id="toolbar">
                <div className="toolbar-drag-handle"></div>
                <Button
                    disabled
                    className='blogIcon'
                    onMouseEnter={() => handleMouseEnter('back')}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        className='blogIconImage'
                        src={hoveredButton === 'back' ? BlogBackIconColor : BlogBackIconGray}
                        alt="Back"
                    />
                    <span>Back</span>
                </Button>
                <Button
                    disabled
                    className='blogIcon'
                    onMouseEnter={() => handleMouseEnter('forward')}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        className='blogIconImage'
                        src={hoveredButton === 'forward' ? BlogForwardIconColor : BlogForwardIconGray}
                        alt="Forward"
                    />
                    <span>Forward</span>
                </Button>
                <Button
                    className='blogIcon'
                    onMouseEnter={() => handleMouseEnter('stop')}
                    onMouseLeave={handleMouseLeave}
                    onClick={stopIframe}
                >
                    <img
                        className='blogIconImage'
                        src={hoveredButton === 'stop' ? BlogStopIconColor : BlogStopIconGray}
                        alt="Stop"
                    />
                    <span>Stop</span>
                </Button>
                <Button
                    className='blogIcon'
                    onMouseEnter={() => handleMouseEnter('refresh')}
                    onMouseLeave={handleMouseLeave}
                    onClick={refreshIframe}
                >
                    <img
                        className='blogIconImage'
                        src={hoveredButton === 'refresh' ? BlogRefreshIconColor : BlogRefreshIconGray}
                        alt="Refresh"
                    />
                    <span>Refresh</span>
                </Button>
                <Button
                    className='blogIcon'
                    onMouseEnter={() => handleMouseEnter('home')}
                    onMouseLeave={handleMouseLeave}
                    onClick={homeIframe}
                >
                    <img
                        className='blogIconImage'
                        src={hoveredButton === 'home' ? BlogHomeIconColor : BlogHomeIconGray}
                        alt="Home"
                    />
                    <span>Home</span>
                </Button>
                <hr aria-orientation="vertical" />
                <Button
                    className='blogIcon'
                    onMouseEnter={() => handleMouseEnter('search')}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        className='blogIconImage'
                        src={hoveredButton === 'search' ? BlogSearchIconColor : BlogSearchIconGray}
                        alt="Search"
                    />
                    <span>Search</span>
                </Button>
                <Button
                    className='blogIcon'
                    onMouseEnter={() => handleMouseEnter('favorites')}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        className='blogIconImage'
                        src={hoveredButton === 'favorites' ? BlogFavoritesIconColor : BlogFavoritesIconGray}
                        alt="Favorites"
                    />
                    <span>Favorites</span>
                </Button>
                <Button
                    className='blogIcon'
                    onMouseEnter={() => handleMouseEnter('history')}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        className='blogIconImage'
                        src={hoveredButton === 'history' ? BlogHistoryIconColor : BlogHistoryIconGray}
                        alt="History"
                    />
                    <span>History</span>
                </Button>
                <hr aria-orientation="vertical" />
                <Button
                    className='blogIcon'
                    onMouseEnter={() => handleMouseEnter('mail')}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        className='blogIconImage'
                        src={hoveredButton === 'mail' ? BlogMailIconColor : BlogMailIconGray}
                        alt="Mail"
                    />
                    <span>Mail</span>
                </Button>
                <Button
                    className='blogIcon'
                    onMouseEnter={() => handleMouseEnter('print')}
                    onMouseLeave={handleMouseLeave}
                >
                    <img
                        className='blogIconImage'
                        src={hoveredButton === 'print' ? BlogPrintIconColor : BlogPrintIconGray}
                        alt="Print"
                    />
                    <span>Print</span>
                </Button>
            </Frame>
            <Frame id="address-bar">
                <div className="toolbar-drag-handle"></div>
                <label for="address">Address</label>
                <form id="address-compound-input" className="inset-deep" onSubmit={handleAddressSubmit}>
                    {favicon && <img id="address-icon" width="16" height="16" src={favicon} alt="Favicon" />}
                    <Input id='address' value={address} onChange={handleAddressChange} />
                </form>
            </Frame>
            <Frame bg="white" boxShadow="$in" h="100%" w="100%">
                <iframe
                    key={iframeKey}
                    ref={iframeRef}
                    src={iframeSrc}
                    width="100%"
                    height="100%"
                    title="abel's blog"
                    onLoad={handleIframeLoad}
                />
            </Frame>
        </>
    );
};

export default BlogWindow;