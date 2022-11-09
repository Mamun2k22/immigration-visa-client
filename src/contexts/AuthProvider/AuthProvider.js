// export const AuthContext = createContext();
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true)

//     const createUser = (email, password) => {
//         setLoading(true);// loading purpose


//         return createUserWithEmailAndPassword(auth, email, password);
//     }
//     const login = (email, password) => {
//         setLoading(true);// loading purpose
//         return signInWithEmailAndPassword(auth, email, password);
//     }

//     const logOut = () => {
//         return signOut(auth);
//     }
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, currentUser => {
//             console.log(currentUser);
//             setUser(currentUser);
//             setLoading(false);//loading term

//         });
//         return () => {
//             return unsubscribe();
//         }
//     }, [])

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         login,
//         logOut

//     }

//     return (
//         <div>
//             <AuthContext.Provider value={authInfo}>
//                 {children}
//             </AuthContext.Provider>


//         </div>
//     );
// };

// export default AuthProvider;