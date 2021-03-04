const request = require('request');
const pd = require("node-pandas");

const url = "http://yunyingdaping.fenxianglife.com/self/table?appCode=744b3a88c9974680982cc5b6612a4e92&pageNum=1&pageSize=10&start_date=2020-12-01&end_date=2020-12-02";

test = request(url, function getdf(error, response, body) {

  const obj = JSON.parse(body);
  var df = pd.DataFrame(obj.data.rows);

  return df;
});

console.log(test.getdf())


function creatTable(data){
  //这个函数的参数可以是从后台传过来的也可以是从其他任何地方传过来的
  //这里我假设这个data是一个长度为5的字符串数组 我要把他放在表格的一行里面，分成五列
  var tableData="<tr>"
  //动态增加5个td,并且把data数组的五个值赋给每个td
  for(var i=0;i<data.length;i++){
   tableData+="<td>"+data[i]+"</td>"
  }
  tableData+="</tr>"
  //现在tableData已经生成好了，把他赋值给上面的tbody
  $("#tbody1").html(tableData)
 }