const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const xhr = new XMLHttpRequest(),
    method = "GET",
    url = "http://yunyingdaping.fenxianglife.com/self/table?appCode=744b3a88c9974680982cc5b6612a4e92&pageNum=1&pageSize=10&start_date=2020-12-01&end_date=2020-12-02";

xhr.open(method, url, true);
xhr.onreadystatechange = function () {
  // In local files, status is 0 upon success in Mozilla Firefox
    var status = xhr.status;
    if (this.readyState === 4 && this.status === 200) {
      // The request has been completed successfully
      const obj = JSON.parse(xhr.responseText);
      console.log(obj.data.rows)
    } else {
      // Oh no! There has been an error with the request!
    }
};
xhr.send();