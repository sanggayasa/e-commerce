import LoginForm from '@/components/auth/login-form';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Or{' '}
            <a
              href="/auth/register"
              className="font-medium text-primary text-blue-500 hover:text-primary/80"
            >
              create a new account
            </a>
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}