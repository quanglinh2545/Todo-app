import React, { useEffect, useState }  from 'react'
import './styles/main.css';
import Todo from './components/Todo';
import Login from "./components/Login";
import Upload from "./components/Upload";

import { auth, storeUserInfo, updateUser } from "./lib/firebase";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);
  
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setLoading(false);
      let newUser = null;
      if (user) {
        newUser = await storeUserInfo(user);
      }
      setUser(newUser);
    });
  }, []);
  const logout = () => {
    auth.signOut();
  };
  
  const handleImageChanged = async downlodUrl => {
    await updateUser(user, downlodUrl);
  }
  
  const HeaderContent = () => {
    if (user) {
      return (
        <div class="navbar-end">
          <div class="navbar-item">
            <Upload userImage={user.image} onSletctedImage={handleImageChanged} />
            {user.name}
          </div>
          <div class="navbar-item">