import React from 'react';
import { List } from '@react95/core';

const HelpMenu = () => (
    <List width="200px">
        <List.Item>Contents and Index</List.Item>
        <List.Item>Tip of the Day</List.Item>
        <List.Item>For Netscape Users</List.Item>
        <List.Item>Tour</List.Item>
        <List.Item>Online Support</List.Item>
        <List.Item>Send Feedback</List.Item>
        <List.Divider />
        <List.Item>About Internet Explorer</List.Item>
    </List>
);

export default HelpMenu;