import React from 'react';
import { List } from '@react95/core';

const FileMenu = ({ handleCloseBlogWindow }) => (
    <List width="200px">
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
);

export default FileMenu;