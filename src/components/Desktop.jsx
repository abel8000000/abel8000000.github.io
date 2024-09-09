import React, { useState } from 'react';
import { Button, Modal, List, Frame, TaskBar, TitleBar, Checkbox, RadioButton } from '@react95/core';
import BlogIcon from '../assets/images/blog-icon.png';
import IeIcon from '../assets/images/ie-icon.png';
import githubIcon from '../assets/images/github-icon.png';
import instagramIcon from '../assets/images/instagram-icon.png';
import '../styles/desktop.css';
import BlogWindow from './BlogWindow.jsx';

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
                maxWidth="1280px"
                height={isMobile ? '85vh' : '80vh'}
                maxHeight="720px"
                title="Blog"
                zIndex={1}
                icon=<img className='windowIcon' src={BlogIcon} alt='Blog' width={16} height={16} />
                defaultPosition={isMobile ? { x: 10, y: 10 } : { x: 60, y: 20 }}
                onClose={handleCloseBlogWindow}
                menu={[{
                    name: 'File',
                    list: <List width="200px">
                        <List.Item>
                            <List width="150px">
                                <List.Item>Window</List.Item>
                                <List.Divider />
                                <List.Item>Message</List.Item>
                                <List.Item>Post</List.Item>
                                <List.Item>Contact</List.Item>
                                <List.Item>Internet Call</List.Item>
                            </List>
                            New
                        </List.Item>
                        <List.Item>Open...</List.Item>
                        <List.Item>Edit</List.Item>
                        <List.Item>Save</List.Item>
                        <List.Item>Save As...</List.Item>
                        <List.Divider />
                        <List.Item>Page Setup...</List.Item>
                        <List.Item>Print...</List.Item>
                        <List.Divider />
                        <List.Item>
                            <List width="150px">
                                <List.Item>Page by E-mail...</List.Item>
                                <List.Item>Link by E-mail...</List.Item>
                                <List.Item>Shortcut to Desktop</List.Item>
                            </List>
                            Send
                        </List.Item>
                        <List.Item>Import and Export...</List.Item>
                        <List.Divider />
                        <List.Item>Properties</List.Item>
                        <List.Item>Work Offline</List.Item>
                        <List.Item onClick={handleCloseBlogWindow}>Close</List.Item>
                    </List>
                }, {
                    name: 'Edit',
                    list: <List width="200px">
                        <List.Item>Cut</List.Item>
                        <List.Item>Copy</List.Item>
                        <List.Item>Paste</List.Item>
                        <List.Divider />
                        <List.Item>Select All</List.Item>
                        <List.Divider />
                        <List.Item>Find (on This Page)...</List.Item>
                    </List>
                }, {
                    name: 'View',
                    list: <List width="200px">
                        <List.Item>
                            <List width="150px">
                                <Checkbox readOnly checked>Standard Buttons</Checkbox>
                                <br />
                                <Checkbox readOnly checked>Address Bar</Checkbox>
                                <br />
                                <Checkbox readOnly checked>Links</Checkbox>
                                <br />
                                <Checkbox readOnly checked={false}>Radio</Checkbox>
                                <br />
                                <List.Divider />
                                <List.Item>Customize...</List.Item>
                            </List>
                            Toolbars
                        </List.Item>
                        <Checkbox readOnly checked>Status Bar</Checkbox>
                        <List.Item>
                            <List width="150px">
                                <List.Item>Search</List.Item>
                                <List.Item>Favorites</List.Item>
                                <List.Item>History</List.Item>
                                <List.Item>Folders</List.Item>
                                <List.Divider />
                                <List.Item>Tip of the Day</List.Item>
                            </List>
                            Explorer Bar
                        </List.Item>
                        <List.Divider />
                        <List.Item>
                            <List width="150px">
                                <List.Item>Back</List.Item>
                                <List.Item>Forward</List.Item>
                                <List.Divider />
                                <List.Item>Home Page</List.Item>
                                <List.Divider />
                                <Checkbox readOnly checked={false}>Cannot find server</Checkbox>
                            </List>
                            Go To
                        </List.Item>
                        <List.Item>Stop</List.Item>
                        <List.Item>Refresh</List.Item>
                        <List.Divider />
                        <List.Item>
                            <List width="150px">
                                <RadioButton name="text-size" value="largest" checked={selectedOption === 'largest'} onChange={null /* TODO */}>
                                    Largest
                                </RadioButton>
                                <RadioButton name="text-size" value="larger" checked={selectedOption === 'larger'} onChange={null /* TODO */}>
                                    Larger
                                </RadioButton>
                                <RadioButton name="text-size" value="medium" checked={selectedOption === 'medium'} onChange={null /* TODO */}>
                                    Medium
                                </RadioButton>
                                <RadioButton name="text-size" value="smaller" checked={selectedOption === 'smaller'} onChange={null /* TODO */}>
                                    Smaller
                                </RadioButton>
                                <RadioButton name="text-size" value="smallest" checked={selectedOption === 'smallest'} onChange={null /* TODO */}>
                                    Smallest
                                </RadioButton>
                            </List>
                            Text Size
                        </List.Item>
                        <List.Item>
                            <List width="150px">
                                <Checkbox readOnly checked>Auto-Select</Checkbox>
                            </List>
                            Encoding
                        </List.Item>
                        <List.Divider />
                        <List.Item>Source</List.Item>
                        <List.Item>Full Screen</List.Item>
                    </List>
                }, {
                    name: 'Favorites',
                    list: <List width="200px">
                        <List.Item>Add to Favorites...</List.Item>
                        <List.Item>Organize Favorites...</List.Item>
                        <List.Divider />
                        <List.Item>No favorites added yet</List.Item>
                    </List>
                }, {
                    name: 'Tools',
                    list: <List width="200px">
                        <List.Item>
                            <List width="150px">
                                <List.Item>Read Mail</List.Item>
                                <List.Item>New Message...</List.Item>
                                <List.Item>Send a Link...</List.Item>
                                <List.Item>Send Page</List.Item>
                                <List.Divider />
                                <List.Item>Read News</List.Item>
                            </List>
                            Mail and News
                        </List.Item>
                        <List.Item>Synchronize</List.Item>
                        <List.Item>Windows Update</List.Item>
                        <List.Divider />
                        <List.Item>Show related links</List.Item>
                        <List.Divider />
                        <List.Item>Internet Options</List.Item>
                    </List>
                }, {
                    name: 'Help',
                    list: <List width="200px">
                        <List.Item>Contents and Index</List.Item>
                        <List.Item>Tip of the Day</List.Item>
                        <List.Item>For Netscape Users</List.Item>
                        <List.Item>Tour</List.Item>
                        <List.Item>Online Support</List.Item>
                        <List.Item>Send Feedback</List.Item>
                        <List.Divider />
                        <List.Item>About Internet Explorer</List.Item>
                    </List>
                }]}
            >
                <BlogWindow />
            </Modal>}

            {showThoughtsWindow && <Modal
                width={isMobile ? '95vw' : '90vw'}
                maxWidth="1280px"
                height={isMobile ? '85vh' : '80vh'}
                maxHeight="720px"
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