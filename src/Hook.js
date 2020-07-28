function useCustomHook(state) {
    

let _state = state;

function setter(newState) {
    window.dispatchEvent(new Event('state', {newState}))
    console.log(newState);
    
    _state = newState
    console.log("sds", _state);
    
}

const listener = window.addEventListener("state", (event)=> _state = event.newState )

//console.log(_state);

return [listener, setter]
}
export default useCustomHook;