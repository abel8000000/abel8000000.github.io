import React from 'react';
import { List } from '@react95/core';

const ToolsMenu = () => (
    <List width="200px">
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
);

export default ToolsMenu;