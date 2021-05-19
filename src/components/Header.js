import React from 'react'
import { Button, Text } from '@chakra-ui/react';

export default function Header({ user }) {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Text style={{ display: "flex" }}>
                <img width="40px" src="/images/react.svg" alt="react" />
                <img width="40px" src="/images/firebase.svg" alt="firebase" />
            </Text>
            <Button size="lg" disabled={user ? false : true}>{user ? "Sign Out" : "Login Nerd"}</Button>
        </div>
    )
}
