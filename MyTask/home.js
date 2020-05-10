const titbit=require('titbit');
const pg=require('pg'); 
const mdb = require('./initdb');
const fs = require('fs');
const funcs = require('./functions');


var app=new titbit({
    debug:true
    //daemon:true
});
var pgdb=new pg.Pool({
    host:'127.0.0.1',
    port:5432,
    user:'houyuqin',
    password:'czwhcloud1234+',
    database:'houyuqin'
})

var _dbpath = './mddata';

app.use(async (c, next) =>{
    c.setHeader('Access-Control-Allow-Origin',  '*');
    c.setHeader('Access-Control-Allow-Methods', [
          'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'
      ]);
    await next(c);
});
app.options('/*', async c =>{});

app.get('/course/chinese',async c=>{
    let sql = 'SELECT * FROM chinese';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/math',async c=>{
    let sql = 'SELECT * FROM math';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/english',async c=>{
    let sql = 'SELECT * FROM english';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/physical',async c=>{
    let sql = 'SELECT * FROM physical';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/chemistry',async c=>{
    let sql = 'SELECT * FROM chemistry';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/bios',async c=>{
    let sql = 'SELECT * FROM bios';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/political',async c=>{
    let sql = 'SELECT * FROM political';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/history',async c=>{
    let sql = 'SELECT * FROM history';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/geography',async c=>{
    let sql = 'SELECT * FROM geography';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/course/exec',async c=>{
    let sql = 'SELECT * FROM painting';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/vedio',async c=>{
    let sql = 'SELECT * FROM vediorcm';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.post('/question',async c=>{
    let sqlthree='SELECT MAX(pid) FROM question';
    let retthree=await pgdb.query(sqlthree);
    var pid=retthree.rows[0].max+1 || 1;
    c.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(c.body)
    console.log(body);
    let sql ='INSERT INTO question(pid,had,side,request,hadclass,require,disadvans)'
           +' VALUES($1,$2,$3,$4,$5,$6,$7)';
     let ret=await pgdb.query(sql,[
         pid,
         body.one,
         body.two,
         body.three,
         body.four,
         body.five,
         body.six
     ]);
     if (ret.rowCount<=0)
     {
         c.res.body={
             status:-1,
             errmsg:'create user failed'
         }
     }else{
         c.res.body={
            status:0,
            data:'ok'
         }
     }
})
app.post('/mylove',async c=>{
    let sqlthree='SELECT MAX(id) FROM mylove';
    let retthree=await pgdb.query(sqlthree);
    var id=retthree.rows[0].max+1 || 1;
    c.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(c.body)
    console.log(body);
    let sql ='INSERT INTO mylove(vedio,class,price,usernum,id)'
           +' VALUES($1,$2,$3,$4,$5)';
     let ret=await pgdb.query(sql,[
         body.vedio,
         body.class,
         body.price,
         body.usernum,
         id
     ]);
     if (ret.rowCount<=0)
     {
         c.res.body={
             status:-1,
             errmsg:'create mylove failed'
         }
     }else{
         c.res.body={
            status:0,
            data:'ok'
         }
     }
})

app.post('/bought',async c=>{
    c.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(c.body)
    console.log(body);
    let sql ='INSERT INTO bought(vedio,class,price,time,usernum)'
           +' VALUES($1,$2,$3,$4,$5)';
     let ret=await pgdb.query(sql,[
         body.vedio,
         body.class,
         body.price,
         body.time,
         body.usernum
     ]);
     if (ret.rowCount<=0)
     {
         c.res.body={
             status:-1,
             errmsg:'create bought failed'
         }
     }else{
         c.res.body={
            status:0,
            data:'ok'
         }
     }
})
app.post('/tobuy',async c=>{
    c.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(c.body)
    console.log(body);
    let sql ='INSERT INTO tobuy(vedio,class,price,time,usernum)'
           +' VALUES($1,$2,$3,$4,$5)';
     let ret=await pgdb.query(sql,[
         body.vedio,
         body.class,
         body.price,
         body.time,
         body.usernum
     ]);
     if (ret.rowCount<=0)
     {
         c.res.body={
             status:-1,
             errmsg:'create bought failed'
         }
     }else{
         c.res.body={
            status:0,
            data:'ok'
         }
     }
})
app.get('/mylove',async c=>{
    // c.setHeader('Content-Type','text/plain ');
    // var body=JSON.parse(c.body)
    //console.log(body);
    let sql ='SELECT * FROM mylove'
     let ret=await pgdb.query(sql);

    c.res.body={
        status:0,
        data:ret.rows
    }
})
//我的
app.get('/bought',async c=>{
    let sql ='SELECT * FROM bought';
     let ret=await pgdb.query(sql);
     c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/tobuy',async c=>{
    let sql ='SELECT * FROM tobuy';
     let ret=await pgdb.query(sql);
     c.res.body={
        status:0,
        data:ret.rows
    }
})
//后台 
app.get('/question',async c=>{
    let sql ='SELECT * FROM question';
     let ret=await pgdb.query(sql);
     c.res.body={
        status:0,
        data:ret.rows
    }
})
app.delete('/mylove/:id',async c=>{
    let sql = 'DELETE FROM mylove WHERE id=$1';
    let ret = await pgdb.query(sql,[
        c.param.id
    ])
    if(ret.rowCount<=0){
        c.res.body = {
            status:-1,
            errmsg:'can not delete mylove'
        }
    }else{
        c.res.body = {
            status:0,
            data:'ok'
        }; 
    }      
})
app.delete('/tobuy',async c=>{
    c.body=JSON.parse(c.body);
    console.log(c.body);
    let sql = 'DELETE FROM tobuy WHERE time=$1';
    let ret = await pgdb.query(sql,[
        c.body.time
    ])
    if(ret.rowCount<=0){
        c.res.body = {
            status:-1,
            errmsg:'can not delete mylove'
        }
    }else{
        c.res.body = {
            status:0,
            data:'ok'
        }; 
    }      
})
app.delete('/bought',async c=>{
    c.body=JSON.parse(c.body);
    console.log(c.body);
    let sql = 'DELETE FROM bought WHERE time=$1';
    let ret = await pgdb.query(sql,[
        c.body.time
    ])
    if(ret.rowCount<=0){
        c.res.body = {
            status:-1,
            errmsg:'can not delete mylove'
        }
    }else{
        c.res.body = {
            status:0,
            data:'ok'
        }; 
    }      
})
app.delete('/vedio',async c=>{
    c.body=JSON.parse(c.body);
    console.log(c.body);
    let sql = 'DELETE FROM vediorcm WHERE id=$1';
    let ret = await pgdb.query(sql,[
        c.body.id
    ])
    if(ret.rowCount<=0){
        c.res.body = {
            status:-1,
            errmsg:'can not delete teacher'
        }
    }else{
        c.res.body = {
            status:0,
            data:'ok'
        }; 
    }      
})
app.delete('/question',async c=>{
    c.body=JSON.parse(c.body);
    console.log(c.body);
    let sql = 'DELETE FROM question WHERE pid=$1';
    let ret = await pgdb.query(sql,[
        c.body.pid
    ])
    if(ret.rowCount<=0){
        c.res.body = {
            status:-1,
            errmsg:'can not delete question'
        }
    }else{
        c.res.body = {
            status:0,
            data:'ok'
        }; 
    }      
})

app.post('/video/:name',async (ctx) => {
    let sqlthree='SELECT MAX(id) FROM '+ctx.param.name;
    let retthree=await pgdb.query(sqlthree);
    var id=retthree.rows[0].max+1 || 1;
    ctx.setHeader('Content-Type','text/plain ')
    var body=JSON.parse(ctx.body)
    console.log(body)
    let sql ='INSERT INTO '+ctx.param.name+'(id,vedio,price,name,userphone)'
            +' VALUES($1,$2,$3,$4,$5)';
    let ret=await pgdb.query(sql,[
        id,body.vedio,body.price,body.name,body.userphone
    ]);
    if (ret.rowCount<=0)
    {
        ctx.res.body={
        status:-1,
        errmsg:'create user failed'
    }
    }else{
        ctx.res.body={
        status:0,
        data:'ok'
    }
    }
});

app.get('/vedio:userphone',async c=>{
    var body = JSON.parse(c.body)
    let sql = 'SELECT * FROM $1 WHERE userphone=$2';
    let ret = await pgdb.query(sql,[
        c.body.class,
        c.param.userphone
    ]);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.post('/selectclass',async c=>{
    c.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(c.body)
    console.log(body);
    let sql ='INSERT INTO selectclass(stdphone,teaphone)'
           +' VALUES($1,$2)';
     let ret=await pgdb.query(sql,[
         body.stdphone,
         body.teaphone
     ]);
     if (ret.rowCount<=0)
     {
         c.res.body={
             status:-1,
             errmsg:'create bought failed'
         }
     }else{
         c.res.body={
            status:0,
            data:'ok'
         }
     }
})
app.post('/infor',async c=>{
    let sqlthree='SELECT MAX(id) FROM infor';
    let retthree=await pgdb.query(sqlthree);
    var id=retthree.rows[0].max+1 || 1;
    c.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(c.body)
    console.log(body);
    let sql ='INSERT INTO infor(id,content)'
           +' VALUES($1,$2)';
     let ret=await pgdb.query(sql,[
         id,
         body.content
     ]);
     if (ret.rowCount<=0)
     {
         c.res.body={
             status:-1,
             errmsg:'create bought failed'
         }
     }else{
         c.res.body={
            status:0,
            data:'ok'
         }
     }
})
app.post('/inforuser',async c=>{
    let sqlthree='SELECT MAX(id) FROM inforuser';
    let retthree=await pgdb.query(sqlthree);
    var id=retthree.rows[0].max+1 || 1;
    c.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(c.body)
    console.log(body);
    let sql ='INSERT INTO inforuser(id,content)'
           +' VALUES($1,$2)';
     let ret=await pgdb.query(sql,[
         id,
         body.content
     ]);
     if (ret.rowCount<=0)
     {
         c.res.body={
             status:-1,
             errmsg:'create bought failed'
         }
     }else{
         c.res.body={
            status:0,
            data:'ok'
         }
     }
})
app.delete('/infor',async c=>{
    c.body=JSON.parse(c.body);
    console.log(c.body);
    let sql = 'DELETE FROM infor WHERE id=$1';
    let ret = await pgdb.query(sql,[
        c.body.id
    ])
    if(ret.rowCount<=0){
        c.res.body = {
            status:-1,
            errmsg:'can not delete infor'
        }
    }else{
        c.res.body = {
            status:0,
            data:'ok'
        }; 
    }      
})
app.delete('/inforuserdel',async c=>{
    c.body=JSON.parse(c.body);
    console.log(c.body);
    let sql = 'DELETE FROM inforuser WHERE id=$1';
    let ret = await pgdb.query(sql,[
        c.body.id
    ])
    console.log(ret.rows);
    if(ret.rowCount<=0){
        c.res.body = {
            status:-1,
            errmsg:'can not delete inforuser'
        }
    }else{
        c.res.body = {
            status:0,
            data:'ok'
        }; 
    }      
})
app.get('/infor',async c=>{
    let sql = 'SELECT * FROM infor';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/inforuser',async c=>{
    let sql = 'SELECT * FROM inforuser';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/selectclass',async c=>{
    let sql = 'SELECT * FROM selectclass';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/selectstd/:tea',async c=>{
    let sql = 'SELECT * FROM selectclass WHERE teaphone=$1';
    let ret = await pgdb.query(sql,[
        c.param.tea
    ]);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/selecttea/:std',async c=>{
    let sql = 'SELECT * FROM selectclass WHERE stdphone=$1';
    let ret = await pgdb.query(sql,[
        c.param.std
    ]);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.delete('/deltea/:std',async c=>{
    c.body=JSON.parse(c.body);
    console.log(c.body);
    let sql = 'DELETE FROM selectclass WHERE stdphone=$1 AND teaphone=$2';
    let ret = await pgdb.query(sql,[
        c.param.std,
        c.body.teaphone
    ])
    if(ret.rowCount<=0){
        c.res.body = {
            status:-1,
            errmsg:'can not delete this recoder'
        }
    }else{
        c.res.body = {
            status:0,
            data:'ok'
        }; 
    }      
})
app.post('/vediorcm',async c=>{
    let sqlthree='SELECT MAX(id) FROM vediorcm';
    let retthree=await pgdb.query(sqlthree);
    var id=retthree.rows[0].max+1 || 1;
    c.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(c.body)
    console.log(body);
    let sql ='INSERT INTO vediorcm(id,vedio,price,name,userphone,class)'
           +' VALUES($1,$2,$3,$4,$5,$6)';
     let ret=await pgdb.query(sql,[
         id,
         body.vedio,
         body.price,
         body.name,
         body.userphone,
         body.class
     ]);
     if (ret.rowCount<=0)
     {
         c.res.body={
             status:-1,
             errmsg:'create bought failed'
         }
     }else{
         c.res.body={
            status:0,
            data:'ok'
         }
     }
})
//加载图片
app.get('/images/:id',async c=>{
    let sql = 'SELECT * FROM images WHERE lujing=$1';
    let ret = await pgdb.query(sql,[
        c.param.id
    ]);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/images',async c=>{
    let sql = 'SELECT * FROM images';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
//上门家教
app.post('/search',async c=>{
    let sqlthree='SELECT MAX(id) FROM search';
    let retthree=await pgdb.query(sqlthree);
    var id=retthree.rows[0].max+1 || 1;
    c.setHeader('Content-Type','text/plain ');
    var body=JSON.parse(c.body)
    console.log(body);
    let sql ='INSERT INTO search(id,std,name,class,address,'+
        'kemu,sex,time,salary,price,request)'
           +' VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)';
     let ret=await pgdb.query(sql,[
         id,
         body.std,
         body.name,
         body.class,
         body.address,
         body.kemu,
         body.sex,
         body.time,
         body.salary,
         body.price,
         body.request
     ]);
     if (ret.rowCount<=0)
     {
         c.res.body={
             status:-1,
             errmsg:'create search failed'
         }
     }else{
         c.res.body={
            status:0,
            data:'ok'
         }
     }
})
app.get('/search',async c=>{
    let sql = 'SELECT * FROM search';
    let ret = await pgdb.query(sql);
    c.res.body={
        status:0,
        data:ret.rows
    }
})
app.get('/search/:id',async c=>{
    let sql = 'SELECT * FROM search WHERE id=$1';
    let ret = await pgdb.query(sql,[
        c.param.id
    ]);
    c.res.body={
        status:0,
        data:ret.rows
    }
})

app.run(8000);
