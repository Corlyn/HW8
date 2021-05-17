var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d')

canvas.width=400
canvas.height=400

var time = 0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) //清除畫布上的軌跡
  //坐標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字（內容，x位置，y位置）
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字（內容，x位置，y位置）
    //地面上的線
    ctx.beginPath() //清掉先前路徑
    ctx.moveTo(25,350)
    ctx.lineTo(375,350)
    ctx.lineWidth = 2
    ctx.strokeStyle="black"
    ctx.stroke()
    
    //旗子
    ctx.beginPath()
    ctx.moveTo(200,75)
    ctx.lineTo(200,25)
    ctx.lineTo(225,40)
    ctx.lineTo(200,50)
    ctx.closePath()
    ctx.fillStyle="#4BA2FF"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
    
    //大頭
    ctx.beginPath()
    
    ctx.arc (200,150,75,Math.PI*2,Math.PI,true)
    ctx.lineTo(125,150)
    ctx.lineTo(275,150)
    ctx.closePath()
    ctx.fillStyle="#2B82FF"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
    
    //小頭
    ctx.beginPath()
    
    ctx.arc (200,75,10,Math.PI*2,Math.PI,true)
    ctx.lineTo(190,75)
    ctx.lineTo(210,75)
    ctx.closePath()
    ctx.fillStyle="white"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
    
    //蓋1
    ctx.fillStyle="#FAFAF5"
    ctx.fillRect(110,150,60,15)
    ctx.strokeRect(110,150,60,15)

    
    //蓋3
    ctx.fillStyle="#BEBDAF"
    ctx.fillRect(230,150,60,15)
    ctx.strokeRect(230,150,60,15)

    //蓋2
    ctx.fillStyle="#E3E2CF"
    ctx.fillRect(165,150,70,15)
    ctx.strokeRect(165,150,70,15)

    
    //主1
    ctx.fillStyle="#FAFAF5"
    ctx.fillRect(115,165,57,100)
    ctx.strokeRect(115,165,57,100)
    
    //主3
    ctx.fillStyle="#BEBDAF"
    ctx.fillRect(229,165,57,100)
    ctx.strokeRect(229,165,57,100)

    
    //主2
    ctx.fillStyle="#E3E2CF"
    ctx.fillRect(168,165,65,100)
    ctx.strokeRect(168,165,65,100)

    
    //主體右1
    ctx.fillStyle="#FAFAF5"
    ctx.fillRect(190,220,75,130)
    ctx.strokeRect(190,220,75,130)

    
    //主體右2
    ctx.fillStyle="#E3E2CF"
    ctx.fillRect(265,220,50,130)
    ctx.strokeRect(265,220,50,130)

    
    //主體左蓋
    ctx.fillStyle="#8DC9FC"
    ctx.fillRect(80,240,140,10)
    ctx.strokeRect(80,240,140,10)

    
    //主體左1
    ctx.fillStyle="#FAFAF5"
    ctx.fillRect(80,250,110,100)
    ctx.strokeRect(80,250,110,100)

    
    //主體左2
    ctx.fillStyle="#E3E2CF"
    ctx.fillRect(185,250,35,100)
    ctx.strokeRect(185,250,35,100)

    
    //窗戶上
    ctx.beginPath()
    
    ctx.arc (200,185,10,Math.PI*2,Math.PI,true)
    ctx.lineTo(190,210)
    ctx.lineTo(210,210)
    ctx.closePath()
    ctx.fillStyle="#2C2F36"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
    
    //窗戶下
    ctx.beginPath()
    
    ctx.arc (115,300,15,Math.PI*2,Math.PI,true)
    ctx.lineTo(100,350)
    ctx.lineTo(130,350)
    ctx.closePath()
    ctx.fillStyle="#2C2F36"
    ctx.fill()
    ctx.strokeStyle="black"
    ctx.stroke()
    
    //車子
    ctx.fillStyle="white"
    let carx = time%440-40
    ctx.fillRect(carx,340,40,25)
    ctx.strokeRect(carx,340,40,25)
    
    //輪子
    ctx.beginPath()
    ctx.arc(carx+10,365,5,0,Math.PI*2)
    ctx.arc(carx+30,365,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()
    
    }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()
}

//draw()

//設定連續繪製
setInterval(draw,30)// 不斷畫圖，每隔30毫秒，約一秒鐘執行30次