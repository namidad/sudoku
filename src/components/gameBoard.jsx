import React, { Component } from 'react';


class  GameBoard extends Component {
    state={
        numbers: [[],[]],
        x: -1,
        y: -1,
    }


    handleClick = (x,y) => {
        let xx = this.state.numbers;
        xx[x][y]="C";
        this.setState({
            numbers: xx,
            x,
            y,
        })
    }

    componentWillMount(){
        let arr=[[],[],[],[],[],[],[],[],[]];
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                arr[i][j]="";
            }
        }
        this.setState({
            numbers:arr,
        })
    }
  render() {
        let arr=[];
        for(let i=0;i<9;i++){
            let x=this.state.numbers[i].map((el,ind)=>{
                if(i===this.state.x && ind===this.state.y){
                    return <div onClick={e => this.handleClick(i,ind)} className={"simple clicked"} key={ind}>{el}</div>
                } else {
                    return <div onClick={e => this.handleClick(i,ind)} className={"simple"} key={ind}>{el}</div>
                } 
            });
            arr.push(x);
        }

        let xd = arr.map((el,ind)=>{
            return <div className={"border"} key={ind}>{el}</div>
        })
        arr=[0,1,2,3,4,5,6,7,8,9];
        arr=arr.map(el=>{
            return <div key={el}>{el}</div>
        });

    return (
      <div className={"gameDashboard"}>
        <div className={"col"}>{xd}</div>
        <div className={"col col2"}>{arr}</div>
      </div>
    );
  }
}

export default GameBoard;
