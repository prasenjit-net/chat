import React from 'react';
import {TreeItem, TreeView} from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {Divider, Paper, Typography} from "@mui/material";
import {useChatRooms} from "../services/useChatRooms";

export const ChatRooms = () => {
    const {data: rooms} = useChatRooms();
    return (
        <Paper style={{flexGrow: 1, padding: "0.5rem", marginRight: "0.5rem"}}>
            <Typography variant="h6">Chat Rooms</Typography>
            <Divider style={{marginTop: "0.5rem", marginBottom: "0.5rem"}}/>
            <TreeView
                aria-label="Chat Rooms"
                defaultCollapseIcon={<ExpandMoreIcon/>}
                defaultExpandIcon={<ChevronRightIcon/>}
            >
                {rooms?.map(room => (
                    <TreeItem key={room.id} nodeId={room.id} label={room.name}>
                        {room.rooms?.map(r1 => (
                            <TreeItem key={r1.id} nodeId={r1.id} label={r1.name}/>
                        ))}
                    </TreeItem>
                ))}
            </TreeView>
        </Paper>
    );
};
