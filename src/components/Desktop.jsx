import React, { useState } from 'react';
import { Button, Modal, List, Frame, TaskBar, TitleBar } from '@react95/core';
import BlogIcon from '../assets/images/blog-icon.png';
import IeIcon from '../assets/images/ie-icon.png';
import githubIcon from '../assets/images/github-icon.png';
import instagramIcon from '../assets/images/instagram-icon.png';
import '../styles/desktop.css';

const Desktop = () => {
    const [showBlogWindow, setShowBlogWindow] = useState(false);
    const [showThoughtsWindow, setShowThoughtsWindow] = useState(false);

    const handleCloseBlogWindow = () => setShowBlogWindow(false);
    const handleOpenBlogWindow = () => setShowBlogWindow(true);
    const handleCloseThoughtsWindow = () => setShowThoughtsWindow(false);
    const handleOpenThoughtsWindow = () => setShowThoughtsWindow(true);

    const isMobile = window.innerWidth < 768;

    return (
        <>
            <Button className='desktopIcon' id='blog-icon' onClick={handleOpenBlogWindow} onTouchEnd={handleOpenBlogWindow}>
                <img src={BlogIcon} alt='Blog' />
                <span>Blog</span>
            </Button>
            <Button className='desktopIcon' id='thoughts-icon' onClick={handleOpenThoughtsWindow} onTouchEnd={handleOpenThoughtsWindow}>
                <img src={IeIcon} alt='Internet Explorer' />
                <span>Thoughts</span>
            </Button>

            {showBlogWindow && <Modal
                width={isMobile ? '95vw' : '90vw'}
                height={isMobile ? '85vh' : '80vh'}

                title="Blog"
                zIndex={1}
                icon=<img src={BlogIcon} alt='Blog' width={16} height={16} />
                defaultPosition={isMobile ? { x: 10, y: 10 } : { x: 40, y: 5 }}
                onClose={handleCloseBlogWindow}
            >
                <Frame bg="white" boxShadow="$in" h="100%" w="100%" padding="0px 5px">
                    <p>
                        Blog
                    </p>
                </Frame>
            </Modal>}

            {showThoughtsWindow && <Modal
                width={isMobile ? '95vw' : '90vw'}
                height={isMobile ? '85vh' : '80vh'}
                title="Thoughts"
                zIndex={1}
                defaultPosition={isMobile ? { x: 10, y: 20 } : { x: 45, y: 10 }}
                onClose={handleCloseThoughtsWindow}
            >
                <Frame bg="white" boxShadow="$in" h="100%" w="100%" padding="0px 5px">
                    <p>
                        Thoughts
                    </p>
                </Frame>
            </Modal>}

            <TaskBar
                list={
                    <List>
                        <TitleBar title='Made with <3 by Abel' />
                        <a href='https://github.com/abel8000000' target='_blank' rel='noopener noreferrer'>
                            <List.Item className='taskbarIcon' id='github' icon={<img src={githubIcon} alt="GitHub" />}>
                                abel8000000
                            </List.Item>
                        </a>
                        <a href='https://www.instagram.com/abel8000000/' target='_blank' rel='noopener noreferrer'>
                            <List.Item className='taskbarIcon' id='instagram' icon={<img src={instagramIcon} alt="Instagram" />}>
                                abel8000000
                            </List.Item>
                        </a>
                    </List>
                }
            />
        </>
    );
};

export default Desktop;