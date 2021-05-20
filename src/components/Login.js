import React from 'react'
import { auth, provider } from '../firebase/firebase';
import { Button, Center } from '@chakra-ui/react';

export default function Login({ loading }) {

    const signInWithGoogle = () => {
        auth.signInWithPopup(provider)
    }

    return (
        <div>
            <Center h="80vh">
                <Button disabled={loading} onClick={signInWithGoogle} size="lg" style={{ fontSize: "20px", padding: "30px 40px" }}>
                    Login With Google <img style={{ marginLeft: "5px" }} src="/images/google.svg" alt="" />
                </Button>
            </Center>
        </div>
    )
}
