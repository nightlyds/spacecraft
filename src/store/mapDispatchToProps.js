import { bindActionCreators } from 'redux';
import loadUpAction from './actionCreators/loadUpAction';

function mapDispatchToProps(component){
    switch(component){
        case "SPACECRAFT":
            return function(dispatch){
                return{
                    loadUp: bindActionCreators(loadUpAction, dispatch)
                }
            }
        default:
            return undefined
    }
}

export default mapDispatchToProps;