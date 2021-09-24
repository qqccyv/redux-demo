import { connect } from 'react-redux';
import Count from '../components/count';
import { createDecrementAction, createIncrementAction, createincrementedcountAsync } from '../redux/count-action'
const mapStateToProps = (state) => {
  return {
    count: state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    jia: (num) => {
      dispatch(createIncrementAction(num))
    },
    jian: (num) => {
      dispatch(createDecrementAction(num))
    },
    jiaAsync: (num, time) => {
      dispatch(createincrementedcountAsync(num, time))
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Count)