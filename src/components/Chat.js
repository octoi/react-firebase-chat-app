import firebase from 'firebase/app';
import { useState, useRef, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, firestore } from '../firebase/firebase';
import { Input, Flex, Button, Avatar } from '@chakra-ui/react';


export default function Chat() {
    const [formValue, setFormValue] = useState("");
    const messagedRef = firestore.collection('messages');
    const dummy = useRef();

    const user = {
        name: auth?.currentUser.displayName,
        email: auth?.currentUser.email,
        profile: auth?.currentUser.photoURL,
    }

    const sendMessage = async (e) => {
        e.preventDefault();

        await messagedRef.add({
            message: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            user,
        });

        dummy.current.scrollIntoView({ behavior: 'smooth' });
        setFormValue("")
    }

    return (
        <Flex direction="column" justifyContent="space-between" marginTop="20px">
            <Messages messagedRef={messagedRef} user={user} dummy={dummy} />
            <form onSubmit={sendMessage} style={{ display: "flex" }}>
                <Input
                    variant="filled"
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    placeholder="say something nice"
                    style={{ marginRight: "10px" }}
                />
                <Button type="submit" disabled={!formValue}>🕊️</Button>
            </form>
        </Flex>
    )
}

function Messages({ messagedRef, user, dummy }) {

    const query = messagedRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    useEffect(() => {
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages])

    return (
        <div style={{ height: "75vh", overflowX: "hidden", margin: "20px 0px" }}>
            {messages && messages.map((message, id) => <ChatMessage user={user} chat={message} key={id} />)}
            <span ref={dummy}></span>
        </div>
    );
}

function ChatMessage({ chat, user }) {

    const isMyMessage = user.email === chat.user.email

    return (
        <Flex alignItems="center" flexDirection={isMyMessage ? "row-reverse" : "row"} marginTop="15px">
            <Avatar src={chat.user.profile} />
            <div style={{
                margin: "0px 10px",
                background: "var(--chakra-colors-whiteAlpha-200)",
                padding: "15px 10px",
                borderRadius: "10px",
                textAlign: "right",
                width: "fit-content"
            }}>
                {chat.message}
            </div>
        </Flex>
    );
}
