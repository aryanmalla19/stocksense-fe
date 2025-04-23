import { useEffect, useState } from 'react';
import useOAuth from '../hooks/authhooks/useOAuth';
import useAuth from '../hooks/authhooks/useAuth';
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton = () => {
  const { login } = useAuth();
  const { mutate, data } = useOAuth();
  const navigate = useNavigate();
  
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: '110759663092-p83752k4p2nm8oqh68vedrhrbo5n3n0q.apps.googleusercontent.com',
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById('google-button'),
        { theme: 'outline', size: 'large' }
      );
    }
  }, []);

  const handleCredentialResponse = (response) => {
    console.log('ID Token', response.credential);
    
    mutate(
      { id_token: response.credential },
      {
        onSuccess: (data) => {
          console.log('Login Success:', data);
          setLoginSuccess(true);
        },
        onError: (err) => {
          console.error('Login failed 💥:', err);
        },
      }
    );
  };

  useEffect(() => {
    if (loginSuccess) {
      login(data?.access_token, data?.refresh_token);
      navigate('/'); 
    }
  }, [loginSuccess, data, login, navigate]); 

  return <div className="mt-5" id="google-button"></div>;
};

export default GoogleLoginButton;
