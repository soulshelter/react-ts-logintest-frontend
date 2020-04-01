import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useLogin from '../hooks/useLogin';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);


export default function Mypage() {
    const classes = useStyles();
    const { onLogout } = useLogin();

    return (
        <div className={classes.root}>
            <h2>Mypage</h2>
            <Button
                variant="contained"
                color="secondary"
                onClick={onLogout}
            >
                logout
        </Button>
        </div>
    )
}