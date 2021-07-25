import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import ActionCreators from '../store/action-creators/combinedActionCreators'


export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators , dispatch)
}