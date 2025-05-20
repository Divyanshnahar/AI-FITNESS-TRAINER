import { SignUp } from "@clerk/nextjs"

const signUpPage = () => {
    return <main className="flex flex-col items-center justify-center min-h-screen p-24">
        <SignUp/>
    </main>
}

export default signUpPage;  
