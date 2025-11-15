import React,{ useState }from'react';
import Login from '@/src/screens/Login';
import Register from '@/src/screens/Register';
import Splash from '../src/screens/SplashScreen';

export default function Index() {

  const[ showSplash, setShowSplash]= useState(true);
  if (showSplash){
    return <Splash onfinish={() => setShowSplash(false)} />;
  }
  return ( <Register />
  );
}
