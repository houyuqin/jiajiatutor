import React, { Component } from 'react'
import { Upload, message, Button, Icon, Modal } from 'antd';
let video={}
const fileList=[]
export default class Vediorcm extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            one:"" ,// 定义选中的值，如果为空字符串，则默认不选中
            files:[]
        }
    }
  
    componentDidMount(){
        fetch("http://148.70.183.184:8000/vedio")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }
    componentDidUpdate(){
        fetch("http://148.70.183.184:8000/vedio")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })  
        });
    }
    del=(id)=>{
        let a = {id:id};
        console.log(a);
        fetch('http://148.70.183.184:8000/vedio',{
            method:"DELETE",
            headers:{
                'Accept':'application/json',
                'Content-Type': 'text/plain',
            },
            body:JSON.stringify(a)
        })
        .then((res)=>{ 
            if(res.status === 200){
                alert('删除成功！');
                return res.json();
            }else{
                alert('？？？');
            }
        })
        .then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    fabu=()=>{
       
        video.price=this.cren3.value;
        video.name=this.cren2.value;
        video.class=this.cren4.value;
        video.vedio=`./vedio/${this.state.files}`
        video.userphone=this.cren1.value
    
        fetch(`http://148.70.183.184:8000/vediorcm`, {
         method: "POST",
         headers: {
            'Content-Type': 'text/plain; charset=UTF-8'
         },
         body: JSON.stringify(video)
       }).then(function(response) {
         // do sth
         
         alert('上传视频成功!')
       });    
       
     }
    onChange = (files, type, index) => {
        this.setState({
            files:files.file.name
        })
      
      }
    
  
    render(){
        return(
               <div style={{width:'80%',height:'100%',float:'left'}}>{
                    this.state.data.map((item,idx)=>(
                            <div key={idx} style={{height:40,borderBottom:'1px solid black',paddingTop:15,marginLeft:15,fontSize:18}}>
                                <p>视频名：{item.name}
                                <span style={{marginLeft:10}}>视频价格：{item.price}</span>
                                <span style={{marginLeft:10}}>视频存储路径：{item.vedio}</span>
                                <button 
                                style={{width:70,height:30,backgroundColor:'#ff9900',float:'right',marginRight:50,color:'white',border:'1px solid #ff9900'}}
                                onClick={()=>this.del(item.id)}
                                >
                                    删除
                                </button>
                                </p>
  
                            </div>
                            
                        ))
                    }
                      <div style={{margin:'15px',height:'400px',padding:'0px 20px',borderStyle:'dotted ' ,overflow:'scroll',width:'102%'}}>            
                <div className="cbu4">   
                    <h4>视频名称:</h4>
                    <input type="text" name="task" className="cren1" ref={i=>this.cren2=i}></input>
                </div>
                <div className="cbu4">   
                    <h4>所属科目:</h4>
                    <input type="text" name="task" className="cren1" ref={i=>this.cren4=i}></input>
                </div>
                <div className="cbu4">   
                    <h4>价格:</h4>
                    <input type="text" name="task" className="cren1" ref={i=>this.cren3=i}></input>
                </div>
                <div className="cbu4">   
                    <h4>输入账号:</h4>
                    <input type="text" name="task" className="cren1" ref={i=>this.cren1=i}></input>
                </div>
                <div className="cbu4">   
                    选择视频:
                    <Upload className='zupload' onChange={this.onChange}>
                    <Button>
                        <Icon type="upload"/> Upload
                    </Button>
                    </Upload>
                    <br />
                </div>
                    <button 
                    style={{width:200,height:40,backgroundColor:'#ff9900',float:'left',marginLeft:300,marginTop:50,border:'1px solid #ff9900',borderRadius:10}}
                    onClick={()=>this.fabu()}>
                            添加视频 
                    </button>
                </div> 

                    </div>
               
        )
    }
}