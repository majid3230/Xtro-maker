import React, {
createContext,
useContext,
useState
} from "react";


const ToastContext = createContext();


export function useToast(){

return useContext(ToastContext);

}



function ToastProvider({children}){


const [toast,setToast] = useState("");



const showToast = (message)=>{

setToast(message);


setTimeout(()=>{

setToast("");

},3000);


};



return (

<ToastContext.Provider 
value={{
toast,
showToast
}}
>


{children}


{toast && (

<div>

{toast}

</div>

)}


</ToastContext.Provider>

);


}


export default ToastProvider;
