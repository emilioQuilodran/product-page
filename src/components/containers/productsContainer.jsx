import { connect } from "react-redux";
import ProductComponent from "../ProductComponent";
import { DecreaseQuantity, addCart, increaseQuantity } from "../../store/actions/actions";

const mapStateToProps = (state) => {
    return {
        state: state.cartState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem: (item) => {dispatch(addCart(item))},
        onIncrement: (item) => {dispatch(increaseQuantity(item))},
        onDecrement: (item) => {dispatch(DecreaseQuantity(item))}
    }
} 

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(ProductComponent)
export default ProductContainer