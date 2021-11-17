import React, { useReducer, createContext, useEffect} from "react";
import app from "../lib/firebase";
import "firebase/firestore";

const initialAuthState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null,
    login: () => { },
    logout: () => { },
    signup: () => { }
}

const reducer = (state, action) => {
    switch (action.type) {
      case "AUTH_STATE_CHANGED": {
        const { isAuthenticated, user } = action.payload;
        return {
          ...state,
          isAuthenticated,
          isInitialized: true,
          user,
        };
      }
      default: {
        return {
          ...state,
        };
      }
    }
  };

export const UserContext = createContext({
    ...initialAuthState,
    signInWithGoogle: () => Promise.resolve(),
    logout: () => Promise.resolve(),
})

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialAuthState);
    const signInWithGoogle = () => {
        const provider = new app.auth.GoogleAuthProvider();
        return app.auth().signInWithPopup(provider);
      };
    
      const logout = () => {
        return app.auth().signOut();
      };
    
      useEffect(
          () => {
              const unsubscribe = app.auth().onAuthStateChanged((user) => {
                if (user) {
                    dispatch({
                        type: "AUTH_STATE_CHANGED",
                        payload: {
                            user: {
                                id: user.id
                            }
                        }
                    })
                }else {
                    dispatch({
                        type: "AUTH_STATE_CHANGED",
                        payload: {
                          isAuthenticated: false,
                          user: null,
                        }
                      });
                }
              })
          }
      )
    
    return(
        <UserContext.Provider value={{
            ...state,
            signInWithGoogle,
            logout: logout
        }}>
            {children}
        </UserContext.Provider>
    )
}

  export default UserProvider;