import React from 'react';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';



export default function Footer() {
    return (
        <div>
            <Typography color="red" style={{ flex: 1, fontSize: 10, fontWeight: "bold", color: "red" }} align="center">
                Made with
                <IconButton color="primary">
                    <FavoriteIcon />
                </IconButton>
                by Tin & Hung
            </Typography>
        </div>
    )
}
