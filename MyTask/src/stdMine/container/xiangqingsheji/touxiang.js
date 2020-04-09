// import React, { Component } from 'react'

// export default class touxiang extends Component {
//     render() {
//         constructor(props){
//             super(props);
//             this.state = {
//                 range: 12,
//                 imageOrigin: "",
//                 imageResult: "",
//                 readerOrigin: new FileReader(),
//                 data:[
//                     <img src={require(`../../img/w头像女孩.png`)}/>,
//                     '我的昵称',
//                     '15230821745',
//                     '1111111'
//                 ]
//             }
//         }
//         onClickSave = () => {
//             const canvas = this.editor.getImage().toDataURL();
//             fetch(canvas)
//               .then(res => res.blob())
//               .then(blob => {
//                 this.img = window.URL.createObjectURL(blob)
//                 this.setState({ imageResult: this.img })
//               })
//           }
//           changeFile(e) {
//             var file = e.target.files[0];
//             this.state.readerOrigin.readAsDataURL(file);
//             this.state.readerOrigin.onload = (e) => {
//               this.setState({
//                 imageOrigin: e.target.result,
//               });
//             }
//           }
//           onUpload() {
//             //可以将这段base64url 字符串传给后端
//               const canvas = this.editor.getImage().toDataURL();
//               let params = new URLSearchParams();
//               params.append('avatar', canvas);
//               axios({
//                 method:"post",
//                 url:"http://localhost:12306/",
//                 data:params
//               }).then(res=>{
//                   //alert('上传成功')
//               }).catch(err=>{
//                   //alert('图片过大, 请使用小图片')
//               })
//             }
//         return (
//             <div>
//                     <input type="file" onChange={(e) => { this.changeFile(e) }} />
//                                 <div style={{ width: "200px", height: "200px", border: "1px solid black" }}>
//                                     <img style={{ width: "100%", height: "100%" }} src={this.state.imageResult} alt="" />
                                    
//                                 </div>
//                                 <ReactAvatarEditor
//                                 ref={(node) => {
//                                     this.editor = node;
//                                 }}
//                                 image={this.state.imageOrigin}
//                                 width={200}
//                                 height={200}
//                                 border={50}
//                                 borderRadius={125}
//                                 color={[255, 255, 255, 0.6]} // RGBA
//                                 //图片被放大的比例 (高度)
//                                 scale={1 + this.state.range / 100}
//                                 rotate={0}
//                                 onMouseMove={(e) => {
//                                     this.onClickSave()
//                                 }}
//                                 ></ReactAvatarEditor>
//                                 <input type="range" onChange={(e) => {
//                                 this.onClickSave()
//                                 this.setState({ range: e.target.value })
//                                 }}></input>
//                                 <button onClick={
//                                 () => this.onClickSave()
//                                 }>查看头像</button>
//                                 <button onClick={
//                                 () => this.onUpload()
//                                 }>确认上传</button>
//             </div>
//         )
//     }
// }
