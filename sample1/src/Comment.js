import React from 'react';

export class Comment extends React.Component {

	constructor(props) {
		super(props);
		//stateの設定；最初はfalse
		this.state = {editing: false}
		//bindしてあげる；しないと読み込めずエラーが発生
		this.edit = this.edit.bind(this);
		this.remove = this.remove.bind(this);
		this.save = this.save.bind(this);
		this.renderNormal = this.renderNormal.bind(this);
		this.renderForm = this.renderForm.bind(this);
	}
	
	edit() {//editingモードfunction
		this.setState({editing: true});//stateをeditingmodeにする

	}
	remove() {//removeのfunction
		this.props.deleteFromBoard(this.props.index);//プロパティで渡されたfunctionを使う
	}
	save() {//saveするfunction
		this.props.updateCommentText(this.refs.newText.value, this.props.index);//プロパティで渡されたfunctionを使う
		this.setState({editing: false});//stateをeditingmodeじゃなくする
	}

	renderNormal() {//通常時の表示：テキスト・editボタンremoveボタン
		return (//onClickでそれぞれのfunctionを発動
      <div>
        <div>{this.props.children}</div>
        <button onClick={this.edit}>Edit</button>
        <button onClick={this.remove}>Remove</button>
      </div>
	    );
	}

	renderForm() {//editing時の表示：テキストエリア・saveボタン
		return (//refでnewTextの値を渡す
      <div>
        <textarea ref="newText" defaultValue={this.props.children}></textarea>
        <button onClick={this.save}>Save</button>
      </div>
	    );
	}

	render() {//editingmodeの時をそうでない時の条件分岐
	    if(this.state.editing) {
	    	return this.renderForm();
	    } else {
	    	return this.renderNormal();
	    }
	}
}