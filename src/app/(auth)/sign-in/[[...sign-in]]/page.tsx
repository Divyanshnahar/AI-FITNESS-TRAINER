import { SignIn } from "@clerk/nextjs";

const signInPage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
        <SignIn/>
    </main>
  );
}

export default signInPage;