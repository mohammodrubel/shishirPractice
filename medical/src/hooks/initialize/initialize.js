import { initializeApp } from "firebase/app";
import firebaseConfig from "../Firebase/Firebase";

const initialize = ()=>{
    initializeApp(firebaseConfig);
}

export default initialize;