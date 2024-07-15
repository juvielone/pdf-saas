import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { userId }: { userId: string | null } = auth();

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">Prompt with any PDF</h1>
            <SignedIn>
              {/* Mount the UserButton component */}
              <UserButton />
            </SignedIn>
          </div>

          {userId && (
            <div className="flex mt-2">
              <Button> Go to Chats</Button>
            </div>
          )}

          <p className="max-w-xl mt-1 text-lg text-gray-800	">
            Join millions of students, researhers and professionals to instantly
            answer questions and understand research with AI
          </p>

          <div className="w-full mt-4">
            {userId ? (
              <FileUpload />
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login to get Started!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
