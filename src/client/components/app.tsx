// client/app.tsx
import { Button } from '@material-ui/core';
import React from 'react'
import { Hello } from './hello';

export default class App extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <div>Test</div>
                <Hello></Hello>                

                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </React.Fragment>
        );
    }
}