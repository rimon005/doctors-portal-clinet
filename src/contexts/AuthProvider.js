import {React ,  createContext , useState , useEffect} from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'
import app from '../Firebase/firebase.config'

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true)


    const createUser = (email , password ) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signIn = (email , password ) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password)
    }

    const logOut= () => {
        setLoading(true)
        return  signOut(auth)
    }

    const updateUser = userInfo => {
        return updateProfile(auth.currentUser , userInfo);
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth , currentUser => {
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    },[])

    const authInfo = {
        createUser,
        signIn,
        logOut,
        updateUser,
        user,
        loading
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;