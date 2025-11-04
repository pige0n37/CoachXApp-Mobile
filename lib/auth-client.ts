import { createAuthClient } from "better-auth/react"
import { expoClient} from "@better-auth/expo/client"
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:3000/",
        plugins: [
        expoClient({
            scheme: "coachxapp",
            storagePrefix: "coachxapp",
            storage: SecureStore,
        })
    ]
})