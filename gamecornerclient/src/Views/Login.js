import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { signInUser } from '../api/auth/auth';

export default function Login( {user} ) {
    return (
        <div>
          {user === null ? (
            <>
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </>
            ) : (
    <>
            <button type='button' className='btn btn-success' onClick={signInUser}>Sign In</button>
      </>
            )}
    
        </div>
      )
}
