
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ForgotPassword = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a password reset endpoint
    console.log('Reset password for:', email);
    
    // Show a success toast
    toast({
      title: "Reset link sent",
      description: "If this email is registered, you'll receive a password reset link shortly.",
    });
    
    setIsSubmitted(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 bg-muted/30">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link to="/" className="flex justify-center mb-5">
          <span className="text-2xl font-bold text-primary">Arch AI</span>
        </Link>
        <h1 className="text-center text-3xl font-bold tracking-tight">
          Reset your password
        </h1>
        <p className="mt-2 text-center text-muted-foreground">
          We'll send a password reset link to your email
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-card px-6 py-12 shadow sm:rounded-xl sm:px-12 border border-border">
          {!isSubmitted ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="email">Email address</Label>
                <div className="mt-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full">
                  Send reset link
                </Button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium">Check your email</h3>
              <p className="mt-2 text-muted-foreground">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Didn't receive the email? Check your spam folder or{' '}
                <button 
                  type="button" 
                  onClick={() => setIsSubmitted(false)}
                  className="text-primary hover:text-primary/90"
                >
                  try another email
                </button>
              </p>
            </div>
          )}
          
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Remember your password?{' '}
            <Link to="/login" className="font-medium text-primary hover:text-primary/90">
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
