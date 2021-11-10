import {collection, getDocs} from "firebase/firestore";
import {firestore} from "../registerFirebase";
import {useQuery} from "react-query";

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

export const useChatRooms = () => {
    return useQuery('chatRooms', () => fetchRoomData(), {
        staleTime: 5000,
    });
}
