var num= []

export default class Wodelaoshi extends Component {
    constructor(){
        super();
        this.state = {
            data:[],
            data1:[]
        }
    }
    componentDidMount(){
        var stdp=window.location.search.split('=')[1];     
         fetch(`http://148.70.183.184:8005/fabu/${stdp}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                this.setState({ data1: res.data });
            })
        
    }
    componentDidUpdate(){
        var stdp=window.location.search.split('=')[1];     
        fetch(`http://148.70.183.184:8005/fabu/${stdp}`, {
           method: 'GET',
           headers: {
               'Content-Type': 'text/plain; charset=UTF-8'
           },
       })
           .then((res) => res.json())
           .then((res) => {
               this.setState({ data1: res.data });
           })
       
    }
    del = (id) => {
      
        fetch(`http://148.70.183.184:8005/taskt/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
        })
            .then((res) => res.json())
            .then((res) => {
                alert('任务删除成功!')
            })
    }
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#708090',color:'white'}}
                icon={<Link to='/'><Icon style={{color:'black'}} type="left" /></Link>}
                >发布的作业</NavBar>
                <div style={{ margin: '15px', padding: '0px 20px', borderStyle: 'dotted ', overflow: 'scroll' }}>
                    {this.state.data1.map((item, idx) => (

                        <div className="cgaii" style={{ height: '180px', }}>

                            <div className="cgai1" style={{ width: '80%' }} >
                                <h4>任务编号：{item.id}</h4>
                                <h4>任务题目：{item.title}</h4>
                                <h4>发布时间：{item.time}</h4>
                                <h4>发布科目：{item.kemu}</h4>
                            </div>
                            <div className="cgai2"><Link to={'/fabu/' + item.id} >></Link></div>
                            <Button style={{marginTop:'60px',backgroundColor:'#1E90FF'}} onClick={()=>this.del(item.id)}>删除</Button>
                        </div>

                    ))}
                </div>
            </div>
        )
    }
}
