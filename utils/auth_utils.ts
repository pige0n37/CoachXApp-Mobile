import { authClient } from "@/lib/auth-client";

export default function useAuthStatus() {
  const { data: session, isPending } = authClient.useSession();

  return {
    loading: isPending,
    isAuthenticated: Boolean(session),
    session,
  };
}