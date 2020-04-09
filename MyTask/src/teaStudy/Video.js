import React, { Component } from 'react'
import { NavBar} from 'antd-mobile';
import { Upload, message, Button, Icon, Modal } from 'antd';
import {Link} from 'react-router-dom';
let video={}
const fileList=[]


export default class TeaStudy extends Component {
    constructor(props) {
        super(props);
        this.state = {        
            one:"" ,// 定义选中的值，如果为空字符串，则默认不选中
          files:[]
        }
    }

    getValue1 = (e)=>{
        this.setState({
            one:e.target.value
        })
    }
    componentWillMount(){
       
    }
    fabu=()=>{
       
       video.price=this.cren3.value;
       video.name=this.cren2.value;
       video.vedio=`./vedio/${this.state.files}`
       video.userphone=window.location.search.split('=')[1]
      var name=this.state.one
       
       fetch(`http://148.70.183.184:8000/video/${name}`, {
        method: "POST",
        headers: {
           'Content-Type': 'text/plain; charset=UTF-8'
        },
        body: JSON.stringify(video)
      }).then(function(response) {
        // do sth
        
        alert('视频上传成功!')
      });    
      
    }
    onChange = (files, type, index) => {
        this.setState({
            files:files.file.name
        })
      
      }
    
    render() {
        const { files } = this.state;
        return (
        
           <div>
                <NavBar
                    style={{ backgroundColor: '#708090', color: 'white' }}
                    leftContent={[
                        <Link to='/'><div style={{ color: 'white', marginRight: '16px' }} ><img src={require('../img/z2.png')} style={{ width: '20px', height: '20px', color: 'white' }}></img></div></Link>
                    ]}
                >上传视频</NavBar>
                <div style={{margin:'15px',height:'600px',padding:'0px 20px',borderStyle:'dotted ' ,overflow:'scroll'}}>
                
                    
                    <div className="cbu4">   
                        
                        <h4>视频科目：</h4>
                <div style={{fontSize:18,paddingLeft:10,color:'black'}}>
                    <input type='radio' id='1' name='a0' value='bios'
                    style={{marginLeft:'9px'}}
                    onChange={(e)=>this.getValue1(e)}/>bios
                    <input type='radio' id='2' name='a0' value='chemistry'
                    style={{marginLeft:'9px'}}
                    onChange={(e)=>this.getValue1(e)}/>chemistry
                     <input type='radio' id='1' name='a0' value='chinese'
                     style={{marginLeft:'9px'}}
                    onChange={(e)=>this.getValue1(e)}/>chinese
                    <input type='radio' id='2' name='a0' value='english'
                    style={{marginLeft:'9px'}}
                    onChange={(e)=>this.getValue1(e)}/>english<br/>
                     <input type='radio' id='1' name='a0' value='geography'
                     style={{marginLeft:'9px'}}
                    onChange={(e)=>this.getValue1(e)}/>geography
                    <input type='radio' id='2' name='a0' value='history'
                    style={{marginLeft:'9px'}}
                    onChange={(e)=>this.getValue1(e)}/>history
                               
                    <input type='radio' id='2' name='a0' value='math'
                    style={{marginLeft:'9px'}}
                    onChange={(e)=>this.getValue1(e)}/>math
                     <input type='radio' id='1' name='a0' value='painting'
                     style={{marginLeft:'9px'}}
                    onChange={(e)=>this.getValue1(e)}/>painting
                    <input type='radio' id='2' name='a0' value='physical'
                    style={{marginLeft:'9px'}}
                    onChange={(e)=>this.getValue1(e)}/>physical
                     <input type='radio' id='1' name='a0' value='political'
                     style={{marginLeft:'9px'}}
                    onChange={(e)=>this.getValue1(e)}/>political
                   
                </div>
                    </div>
                    <div className="cbu4">   
                        视频名称:
                        <input type="text" name="task" className="cren1" ref={i=>this.cren2=i}></input>
                    </div>
                    <div className="cbu4">   
                        价格:
                        <input type="text" name="task" className="cren1" ref={i=>this.cren3=i}></input>
                    </div>
                    <div className="cbu4">   
                        视频地址:
                      
    <Upload className='zupload' onChange={this.onChange}>
      <Button>
        <Icon type="upload"/> Upload
      </Button>
    </Upload>
    <br />


                    </div>
                  
                    <input type="submit" value="发布" className="cbuan"  onClick={()=>this.fabu()}/>
                
                </div>
           </div>
        )
    }
}
