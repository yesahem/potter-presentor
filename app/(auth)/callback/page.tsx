import { onAuthenticateUser } from "@/actions/user";
import { useRouter } from "next/navigation";

export default async function AuthCallback() {
  const user = await onAuthenticateUser();
  const router = useRouter();
  if (200 === user?.status) {
    router.push("/dashboard");
  }
  if (403 === user?.status || 500 === user?.status) {
    router.push("/signin");
  }
  return <div>i am a callback Route</div>;
}
