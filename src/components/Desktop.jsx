import React, { useState } from 'react';
import { Button, Modal, List, Frame, TaskBar, TitleBar } from '@react95/core';
import BlogIcon from '../assets/images/blog-icon.png';
import IeIcon from '../assets/images/ie-icon.png';
import githubIcon from '../assets/images/github-icon.png';
import instagramIcon from '../assets/images/instagram-icon.png';

const Desktop = () => {
    const [showBlogWindow, setShowBlogWindow] = useState(false);
    const [showThoughtsWindow, setShowThoughtsWindow] = useState(false);

    const handleCloseBlogWindow = () => setShowBlogWindow(false);
    const handleCloseThoughtsWindow = () => setShowThoughtsWindow(false);

    return (
        <>
            <Button className='desktopIcon' id='blog-icon' onClick={() => setShowBlogWindow(true)}>
                <img src={BlogIcon} alt='Blog' />
                <span>Blog</span>
            </Button>
            <Button className='desktopIcon' id='thoughts-icon' onClick={() => setShowThoughtsWindow(true)}>
                <img src={IeIcon} alt='Internet Explorer' />
                <span>Thoughts</span>
            </Button>

            {showBlogWindow && <Modal
                width="300px"
                height="200px"
                title="Blog"
                zIndex={1}
                icon=<img src={BlogIcon} alt='Blog' width={16} height={16} />
                defaultPosition={{ x: 100, y: 100 }}
                onClose={handleCloseBlogWindow}
            >
                <Frame bg="white" boxShadow="$in" h="100%" w="100%" padding="0px 5px">
                    <p>
                        Blog
                    </p>
                </Frame>
            </Modal>}

            {showThoughtsWindow && <Modal
                width="300px"
                height="200px"
                title="Thoughts"
                zIndex={1}
                defaultPosition={{ x: 100, y: 100 }}
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
                        <List.Item className='taskbarIcon' id='github' icon={<img src={githubIcon} alt="GitHub" />}>
                            abel8000000
                        </List.Item>
                        <List.Item className='taskbarIcon' id='instagram' icon={<img src={instagramIcon} alt="Instagram" />}>
                            abel8000000
                        </List.Item>
                    </List>
                }
            />
        </>
    );
};

export default Desktop;