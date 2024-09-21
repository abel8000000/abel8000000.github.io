import React from 'react';
import { List, Checkbox, RadioButton } from '@react95/core';

const ViewMenu = ({ selectedOption }) => (
    <List width="200px">
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
);

export default ViewMenu;