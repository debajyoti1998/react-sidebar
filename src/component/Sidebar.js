import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';

import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    drawer: {
        top:'60px',
        width: 200,
        backgroundColor:'pink'
        // backgroundColor:'pink'
    },
    fullList: {
        width: 'auto',
    },
    listText: {
        color: 'green',
        marginLeft:20,
    },
}));


export default function Sidebar({openside , closeside}) {
    const classes = useStyles();

    return (
        <Drawer 
            classes={{ paper: classes.drawer }}
            anchor="left"
            open={openside} 
            onClose={closeside }
        >
            <div
                className={classes.fullList}
            >
                
                <List>
                    <ListItem button key="1">
                        <Link to='/'>
                            <ListItemText  primary="dashboard" className={classes.listText} />
                        </Link>
                    </ListItem>

                    <ListItem button key="2">
                        <Link to='/a'>
                            <ListItemText primary="aa" className={classes.listText}  />
                        </Link>
                    </ListItem>


                    <ListItem button key="3">
                        <Link to='/b'>
                            <ListItemText primary="Details" className={classes.listText} />
                        </Link>
                    </ListItem>
                    
                    <ListItem button key="4">
                        <Link to='/contact'>
                            <ListItemText primary="Contact" className={classes.listText} />
                        </Link>
                    </ListItem>
                    <ListItem button key='5'>
                        <Link to="/fff">
                            <ListItemText primary="sdfghjm" className={classes.listText}/>
                        </Link>
                    </ListItem>
                </List>
            </div>
        </Drawer>
    )
}
