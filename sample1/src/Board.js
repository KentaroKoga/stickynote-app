import React from 'react';
import { Comment } from './Comment';

export class Board extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			comments : []
		}
		this.eachComment = this.eachComment.bind(this);
		this.removeComment = this.removeComment.bind(this);
		this.updateComment = this.updateComment.bind(this);
		this.add = this.add.bind(this);
	}
	
	//addボタン
	add(text) {
		var arr = this.state.comments;
		arr.push(text);//pushで追加
		this.setState({comments: arr})
	}

	//削除するfunction
	removeComment(i) {
		var arr = this.state.comments;
		arr.splice(i, 1);//spliceで削除(i, 1)で１つremove
		this.setState({comments: arr})
	}

	//アップデートするfunction
	updateComment(newText, i) {
		var arr = this.state.comments;
		arr[i] = newText;
		this.setState({comments: arr})
	}

	eachComment(text, i) {
		return (
		<Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>
			{text}
		</Comment>
		);//ユニークなkeyをつける
	}

	render() {
		return(
			<div>
				<button onClick={this.add.bind(null, 'にゃぱぱ〜ん')}>Add New</button>
		        {this.state.comments.map(this.eachComment)}
		    </div>
		);
	}
	
}