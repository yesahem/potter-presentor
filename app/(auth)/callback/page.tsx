import { onAuthenticateUser } from "@/actions/user";
import { redirect } from "next/navigation";

export default async function AuthCallback() {
  const user = await onAuthenticateUser();

  if (200 === user?.status) {
    redirect("/dashboard");
  }
  if (403 === user?.status || 500 === user?.status) {
    redirect("/signin");
  }
  return <div>i am a callback Route</div>;
}
