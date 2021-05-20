import { useState } from 'react';
import { auth } from '../firebase/firebase';
import { Input, Flex, Button, Avatar } from '@chakra-ui/react';


export default function Chat() {
    const [formValue, setFormValue] = useState("");

    const user = {
        name: auth?.currentUser.displayName,
        email: auth?.currentUser.email,
        profile: auth?.currentUser.photoURL,
    }

    const sendMessage = () => {

    }

    return (
        <Flex direction="column" justifyContent="space-between" marginTop="20px">
            <div style={{ height: "75vh", overflowX: "hidden", margin: "20px 0px" }}>

                <ChatMessage chat={{ message: "Hello World, this is awesome", sender: { ...user, email: "test@test.com" } }} user={user} />
                <ChatMessage chat={{ message: "Hello World, this is awesome", sender: user }} user={user} />
                <ChatMessage chat={{ message: "Hello World, this is awesome", sender: { ...user, email: "test@test.com" } }} user={user} />
                <ChatMessage chat={{ message: "Hello World, this is awesome", sender: user }} user={user} />
                <ChatMessage chat={{ message: "Hello World, this is awesome", sender: { ...user, email: "test@test.com" } }} user={user} />
                <ChatMessage chat={{ message: "Hello World, this is awesome", sender: user }} user={user} />
                <ChatMessage chat={{ message: "Hello World, this is awesome", sender: { ...user, email: "test@test.com" } }} user={user} />
                <ChatMessage chat={{ message: "Hello World, this is awesome", sender: user }} user={user} />
                <ChatMessage chat={{ message: "Hello World, this is awesome", sender: { ...user, email: "test@test.com" } }} user={user} />
                <ChatMessage chat={{ message: "Hello World, this is awesome", sender: user }} user={user} />
                <ChatMessage chat={{ message: "Hello World, this is awesome", sender: { ...user, email: "test@test.com" } }} user={user} />
                <ChatMessage chat={{ message: "Hello World, this is awesome", sender: user }} user={user} />

            </div>
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

function ChatMessage({ user, chat }) {

    const isMyMessage = user.email === chat.sender.email

    return (
        <Flex alignItems="center" flexDirection={isMyMessage ? "row-reverse" : "row"} marginTop="15px">
            <Avatar src={chat.sender.profile} />
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
