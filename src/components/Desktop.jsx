import React, { useState } from 'react';
import { Button, Modal, List, TaskBar, TitleBar } from '@react95/core';
import BlogIcon from '../assets/images/blog-icon.png';
import IeIcon from '../assets/images/ie-icon.png';
import githubIcon from '../assets/images/github-icon.png';
import instagramIcon from '../assets/images/instagram-icon.png';
import '../styles/desktop.css';
import BlogWindow from './BlogWindow.jsx';
import ThoughtsWindow from './ThoughtsWindow.jsx';
import FileMenu from './MenuBar/FileMenu.jsx';
import EditMenu from './MenuBar/EditMenu.jsx';
import ViewMenu from './MenuBar/ViewMenu.jsx';
import FavoritesMenu from './MenuBar/FavoritesMenu.jsx';
import ToolsMenu from './MenuBar/ToolsMenu.jsx';
import HelpMenu from './MenuBar/HelpMenu.jsx';

const Desktop = () => {
    const [showBlogWindow, setShowBlogWindow] = useState(false);
    const [showThoughtsWindow, setShowThoughtsWindow] = useState(false);

    const handleCloseBlogWindow = () => setShowBlogWindow(false);
    const handleOpenBlogWindow = () => setShowBlogWindow(true);
    const handleCloseThoughtsWindow = () => setShowThoughtsWindow(false);
    const handleOpenThoughtsWindow = () => setShowThoughtsWindow(true);

    // For the radio buttons in the Blog window
    const [selectedOption, /* setSelectedOption */] = React.useState('medium');
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSelectedOption(e.target.value);

    const isMobile = window.innerWidth < 768;

    return (
        <>
            <div className='desktopIcon' id='blog-icon'>
                <Button onClick={handleOpenBlogWindow}>
                    <img src={BlogIcon} alt='Blog' />
                    <span>Blog</span>
                </Button>
            </div>
            <div className='desktopIcon' id='thoughts-icon'>
                <Button onClick={handleOpenThoughtsWindow}>
                    <img src={IeIcon} alt='Internet Explorer' />
                    <span>Thoughts</span>
                </Button>
            </div>

            {showBlogWindow && <Modal
                width={isMobile ? '95vw' : '90vw'}
                height={isMobile ? '85vh' : '90vh'}
                title="Blog"
                zIndex={1}
                icon=<img className='windowIcon' src={BlogIcon} alt='Blog' width={16} height={16} />
                dragOptions={{
                    defaultPosition: isMobile ? { x: 10, y: 10 } : { x: 60, y: -30 },
                }}
                titleBarOptions={[
                    <TitleBar.Minimize key="minimize" />,
                    <TitleBar.Restore key="restore" />,
                    <TitleBar.Close key="close" onClick={handleCloseBlogWindow} />,
                ]}
                menu={[{
                    name: 'File',
                    list: <FileMenu handleCloseBlogWindow={handleCloseBlogWindow} />
                }, {
                    name: 'Edit',
                    list: <EditMenu />
                }, {
                    name: 'View',
                    list: <ViewMenu selectedOption={selectedOption} />
                }, {
                    name: 'Favorites',
                    list: <FavoritesMenu />
                }, {
                    name: 'Tools',
                    list: <ToolsMenu />
                }, {
                    name: 'Help',
                    list: <HelpMenu />
                }]}
            >
                <Modal.Content>
                    <BlogWindow />
                </Modal.Content>
            </Modal>}

            {showThoughtsWindow && <Modal
                width={isMobile ? '95vw' : '90vw'}
                height={isMobile ? '85vh' : '90vh'}
                title="Thoughts"
                zIndex={1}
                dragOptions={{
                    defaultPosition: isMobile ? { x: 10, y: 20 } : { x: 45, y: 10 },
                }}
                titleBarOptions={[
                    <TitleBar.Minimize key="minimize" />,
                    <TitleBar.Restore key="restore" />,
                    <TitleBar.Close key="close" onClick={handleCloseThoughtsWindow} />,
                ]}
                menu={[{
                    name: 'File',
                    list: <FileMenu handleCloseBlogWindow={handleCloseThoughtsWindow} />
                }, {
                    name: 'Edit',
                    list: <EditMenu />
                }, {
                    name: 'View',
                    list: <ViewMenu selectedOption={selectedOption} />
                }, {
                    name: 'Favorites',
                    list: <FavoritesMenu />
                }, {
                    name: 'Tools',
                    list: <ToolsMenu />
                }, {
                    name: 'Help',
                    list: <HelpMenu />
                }]}
            >
                <Modal.Content>
                    <ThoughtsWindow />
                </Modal.Content>
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