


const stateGioHang = {
    GioHang:[]
}

const GioHangReducer =(state=stateGioHang,action)=> {
    switch(action.type){
        case 'THAM_GIO_HANG':{
            state.GioHang.push(action.itemOrder);

            //set state Gio Hang
            state.GioHang=[...state.GioHang];
            
            console.log({...state})

            return {...state}
        }
    }



    return {...state}

}

export default GioHangReducer;