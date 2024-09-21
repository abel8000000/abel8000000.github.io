import React from 'react';
import { List } from '@react95/core';

const FavoritesMenu = () => (
    <List width="200px">
        <List.Item>Add to Favorites...</List.Item>
        <List.Item>Organize Favorites...</List.Item>
        <List.Divider />
        <List.Item>No favorites added yet</List.Item>
    </List>
);

export default FavoritesMenu;