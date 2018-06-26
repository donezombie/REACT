import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {CaiLozGiThe} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book)=>{
            console.log(this.props.ahihi);
            return(
                <li 
                key={book.title} 
                className="list-group-item"
                onClick={()=>this.props.selectBook(book)}
                >{book.title}</li>
            )
        })
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectBook: selectBook, CLGT: CaiLozGiThe},dispatch);
}

//Connect from reducers to containers
//Make Export data to Props of Components
function mapStateToProps(state){
    return {
        books: state.books,
        ahihi: state.ahihi
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList)