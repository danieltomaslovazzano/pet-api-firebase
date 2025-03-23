// src/app/auth/reset-password/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/auth-context'; // Actualizamos la importación

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetComplete, setResetComplete] = useState(false);
  const [validationError, setValidationError] = useState('');
  const { resetPassword, loading, error } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const oobCode = searchParams.get('oobCode'); // Firebase usa 'oobCode' en lugar de 'token'

  useEffect(() => {
    if (!oobCode) {
      router.push('/auth/login');
    }
  }, [oobCode, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');
    
    if (password !== confirmPassword) {
      setValidationError('Las contraseñas no coinciden');
      return;
    }
    
    if (password.length < 8) {
      setValidationError('La contraseña debe tener al menos 8 caracteres');
      return;
    }
    
    try {
      if (oobCode) {
        await resetPassword(oobCode, password);
        setResetComplete(true);
      }
    } catch (err) {
      // Error ya manejado en el contexto
    }
  };

  if (!oobCode) {
    return <div>Redirigiendo...</div>;
  }

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Restablecer contraseña
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {resetComplete ? (
          <div className="text-center">
            <div className="mb-4 text-sm text-gray-600">
              Su contraseña ha sido restablecida exitosamente.
            </div>
            <Link
              href="/auth/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Iniciar sesión
            </Link>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Nueva contraseña
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                Confirmar contraseña
              </label>
              <div className="mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
            </div>

            {validationError && (
              <div className="text-red-500 text-sm">
                {validationError}
              </div>
            )}

            {error && (
              <div className="text-red-500 text-sm">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-70"
              >
                {loading ? 'Restableciendo...' : 'Restablecer contraseña'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}