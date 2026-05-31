'use client'
import Admin from "@/components/Dashboard/Admin";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const DashboardPage = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user

    const router = useRouter()

    return (
        <div className="flex flex-col items-start gap-4 p-4 bg-white rounded shadow">
            <div className="flex gap-10">
                <button
                    onClick={() => { authClient.signOut(); router.push('/') }}
                    className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition"
                >
                    Logout
                </button>

                <p className="font-bold text-2xl">{user?.email}</p>
            </div>

            {user?.email === 'rootadmin@company.com' && (
                <div className="w-full mt-2">
                    <Admin user={user} />
                </div>
            )}
        </div>
    );
};

export default DashboardPage;