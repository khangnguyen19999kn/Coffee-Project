import {combineReducers} from 'redux'
import GioHangReducer from '../redux/GioHangReducer'


const rootReducer= combineReducers({
    stateGioHang: GioHangReducer

})
export default rootReducer;