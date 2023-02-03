import React from 'react';
import { Button, Container,  Icon, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            
            <Container>
            <div style={{marginRight:'10px'}}>
                <Menu.Item header>
                    <img src="/assets/logo1.png" alt="logo" style={{marginRight: '10px'}}/>
                    <div id="appname"><h2>Quizzard</h2></div>
                </Menu.Item>
                </div>
                <Menu.Item name='Quizzes'/>
                
                <Menu.Item style={{marginLeft:'48em'}}>
                <Button icon labelPosition='left'   color='teal'size='huge'>
                  <Icon name = 'sign in'/>
                    Sign In
                    </Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}