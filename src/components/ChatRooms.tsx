import React, {useEffect, useState} from 'react';
import {TreeItem, TreeView} from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {Divider, Paper, Typography} from "@mui/material";
import {collection, getDocs} from "firebase/firestore";
import {firestore} from "../registerFirebase";

export interface ChatRoom {
    id: string;
    name: string;
    description: string;
    rooms: ChatRoom[];
}

const fetchRoomData = async (path: string[] = [], recursive: boolean = true): Promise<ChatRoom[]> => {
    const snapshot = await getDocs(collection(firestore, '/rooms', ...path))
    const rooms: ChatRoom[] = [];
    for (const doc in snapshot.docs) {
        const data = snapshot.docs[doc].data();
        const items = {
            id: snapshot.docs[doc].id,
            name: data.name,
            description: data.description
        } as ChatRoom;
        if (data.folder) {
            const newPath = [...path, items.id, "rooms"];
            items.rooms = await fetchRoomData(newPath)
        }
        rooms.push(items)
    }
    return rooms;
};

export const ChatRooms = () => {
    const [rooms, setRooms] = useState<ChatRoom[]>([]);
    useEffect(() => {
        fetchRoomData().then(setRooms);
    }, []);
    return (
        <Paper style={{flexGrow: 1, padding: "0.5rem", marginRight: "0.5rem"}}>
            <Typography variant="h6">Chat Rooms</Typography>
            <Divider style={{marginTop: "0.5rem", marginBottom: "0.5rem"}}/>
            <TreeView
                aria-label="Chat Rooms"
                defaultCollapseIcon={<ExpandMoreIcon/>}
                defaultExpandIcon={<ChevronRightIcon/>}
            >
                {rooms.map(room => (
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
