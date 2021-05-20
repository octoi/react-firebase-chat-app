import React from 'react'
import { Button, Center } from '@chakra-ui/react';

export default function Login() {

    const login = () => {

    }

    return (
        <div>
            <Center h="80vh">
                <Button onClick={login} size="lg" style={{ fontSize: "20px", padding: "30px 40px" }}>
                    Login With Google <img style={{ marginLeft: "5px" }} src="/images/google.svg" alt="" />
                </Button>
            </Center>
        </div>
    )
}
