import Form from '@/components/form';

export default function Login() {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
            <nav className="bg-gray-100 fixed top-0 left-0 right-0 border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-4 pt-4">
                    <h3 className="font-bold">Music Catalog</h3>
                </div>
            </nav>

            <div className="z-10 w-full max-w-md overflow-hidden rounded-md border border-gray-100 shadow-xl">
                <div className="flex flex-col space-y-2 border-b border-gray-200 bg-gray-900 px-4 py-3 pt-4 sm:px-16">
                    <h3 className="text-xl font-semibold text-white">Sign In</h3>
                </div>
                <Form type="login" />
            </div>
        </div>
    );
}
