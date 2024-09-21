import React from 'react';
import { List } from '@react95/core';

const EditMenu = () => (
    <List width="200px">
        <List.Item>Cut</List.Item>
        <List.Item>Copy</List.Item>
        <List.Item>Paste</List.Item>
        <List.Divider />
        <List.Item>Select All</List.Item>
        <List.Divider />
        <List.Item>Find (on This Page)...</List.Item>
    </List>
);

export default EditMenu;