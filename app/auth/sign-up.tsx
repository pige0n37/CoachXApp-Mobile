import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { authClient } from "@/lib/auth-client";

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        await authClient.signUp.email({
                email,
                password,
                name
        })
    };

    const handleLogout = async () => {
        await authClient.signOut();
    }

    const handleLoginWithGoogle = async () => {
            const data = await authClient.signIn.social({
                provider: "google",
                callbackURL: "/auth/social/callback",

            });
            console.log(data)
        }

    return (
        <View>
            <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
            <Button title="Login with Google" onPress={handleLoginWithGoogle} />
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
}