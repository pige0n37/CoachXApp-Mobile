import { useState } from "react"; 
import { View, TextInput, Button } from "react-native";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "expo-router";
import isLoggedIn from "@/utils/auth_utils";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = async () => {
        const res = await authClient.signIn.email({
            email,
            password,
        });
        if (res.data) {
            router.replace("/dashboard/nutrition");
        } else {
            console.log("Login failed:", res);
        }
    };

    return (
        <View>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
}